import { GameLayout } from "./ui/GameLayout";
import { BackLink } from "./ui/BackLink";
import { GameTitle } from "./ui/GameTitle";
import { GameInfo } from "./ui/GameInfo";
import { GameMoveInfo } from "./ui/GameMoveInfo"
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/PlayerInfo";
import { GameCell } from "./ui/GameCell";
import { GameOverModal } from "./ui/GameOverModal";
import { GAME_STATE_ACTIONS, gameStateReducer, initGameState } from "./model/gameStateReducer";
import { computeWinnerSymbol } from "./model/computeWinnerSymbol";
import { computeWinner } from "./model/computeWinner";
import { getNextMove } from "./model/getNextMove";
import { computePlayerTimer } from "./model/computePlayerTimer";
import { useCallback, useMemo, useReducer } from "react";
import { useInterval } from "../lib/timers";

const PLAYERS_COUNT = 3;

export function Game() {
    const [gameState, dispatch] = useReducer(
        gameStateReducer, 
        { 
            playersCount: PLAYERS_COUNT, 
            defaultTimer: 10000, 
            currentMoveStart: Date.now() 
        }, 
        initGameState);
    
    useInterval(1000, !!gameState.currentMoveStart, useCallback(() => {
        dispatch({
            type: GAME_STATE_ACTIONS.TICK,
            now: Date.now(),
        });
    }, []));

    const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
    const nextMove = getNextMove(gameState.currentMove, PLAYERS_COUNT, gameState.timers);
    const winnerSymbol = computeWinnerSymbol(gameState, { winnerSequence, nextMove })
    const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

    const handleCellClick = useCallback((index) => {
        dispatch({
            type: GAME_STATE_ACTIONS.CELL_CLICK,
            index,
            now: Date.now(),
        });
    }, []);
    const { cells, currentMove } = gameState;

    return (
        <>
            <GameLayout 
                backLink={<BackLink />} 
                title={<GameTitle />} 
                gameInfo={<GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />}
                playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, idx) => {
                    const { timer, timerStartAt } = computePlayerTimer(gameState, player.symbol);
                    return (<PlayerInfo 
                        key={player.id} 
                        avatar={player.avatar}
                        name={player.name}
                        rating={player.rating}
                        symbol={player.symbol}
                        timer={timer}
                        timerStartAt={timerStartAt}
                        isRight={idx % 2 === 1}
                    />);}
                )}
                gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}
                gameCells={cells.map((cell, idx) => (
                    <GameCell 
                        key={idx} 
                        idx={idx}
                        onClick={handleCellClick} 
                        isWinner={winnerSequence?.includes(idx)}
                        disabled={!!winnerSymbol}
                        symbol={cell}
                    />
                ))}
            />
            <GameOverModal
                winnerName={winnerPlayer?.name}
                players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, idx) => (
                    <PlayerInfo 
                        key={player.id} 
                        avatar={player.avatar}
                        name={player.name}
                        rating={player.rating}
                        symbol={player.symbol}
                        timer={gameState.timers[player.symbol]}
                        isRight={idx % 2 === 1}
                    />
                ))}
            />
        </>
    );
}