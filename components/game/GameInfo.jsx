import { Profile } from "../profile/Profile";
import { CrossIcon } from "./icons/CrossIcon";
import { ZeroIcon } from "./icons/ZeroIcon";
import { SquareIcon } from "./icons/SquareIcon";
import { TriangleIcon } from "./icons/TriangleIcon";
import { GameSymbol } from "./GameSymbol";
import { GAME_SYMBOLS } from "./constants";
import avatar from "./avatar.png";
import { useEffect, useState } from "react";

const players = [
    { id: 1, name: "noName", rating: 1230, avatar: avatar, symbol: GAME_SYMBOLS.CROSS },
    { id: 2, name: "saswe", rating: 435, avatar: avatar, symbol: GAME_SYMBOLS.ZERO },
    { id: 3, name: "Kwago", rating: 865, avatar: avatar, symbol: GAME_SYMBOLS.TRIANGLE },
    { id: 4, name: "matre", rating: 920, avatar: avatar, symbol: GAME_SYMBOLS.SQUARE },
]

export function GameInfo({ className, playersCount, currentMove, isWinner, onPlayerTimeOver }) {
    return (
        <div className={`${className} bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3`}>
            {players.slice(0, playersCount).map((player, idx) => (
                <PlayerInfo 
                    key={player.id} 
                    playerInfo={player} 
                    isRight={idx % 2 == 1} 
                    isTimerRunning={currentMove === player.symbol && !isWinner}
                    onTimeOver={() => onPlayerTimeOver(player.symbol)}
                />
            ))}
        </div>
    );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
    const [seconds, setSeconds] = useState(6);

    const minuteString = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondString = String(seconds % 60).padStart(2, "0");
    const isDanger = seconds < 10;

    useEffect(() => {
        if (isTimerRunning) {
            const interval = setInterval(() => {setSeconds((s) => Math.max(s - 1, 0))}, 1000);
            return () => {
                clearInterval(interval);
                setSeconds(6);
            };
        }
    }, [isTimerRunning]);
    useEffect(() => {
        if (seconds === 0) {
            onTimeOver();
        }
    }, [seconds]) // ne nado tak delat`

    const getTimerColor = () => {
        if (isTimerRunning) {
            return isDanger ? 'text-orange-600' : 'text-slate-900';
        }
        return "text-slate-200";
    }

    return (
        <div className="flex gap-3 items-center">
            <div className={`relative ${isRight && "order-3"}`}>
                <Profile 
                    className="w-44" 
                    name={playerInfo.name} 
                    rating={playerInfo.rating} 
                    avatar={playerInfo.avatar} 
                />
                <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
                    <GameSymbol symbol={playerInfo.symbol} />
                </div>
            </div>
            <div className={`h-6 w-px bg-slate-200 ${isRight && "order-2"}`} />
            <div className={`text-lg font-semibold ${isRight && "order-1"} ${getTimerColor()}`}>
                {minuteString}:{secondString}
            </div>
        </div>
    );
}