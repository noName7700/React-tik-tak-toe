import { useNow } from "./../../lib/timers";
import { GameSymbol } from "./GameSymbol";
import Image from "next/image";

export function PlayerInfo({ isRight, name, rating, avatar, symbol, timer, timerStartAt }) {
    const now = useNow(1000, timerStartAt);
    const mills = Math.max(now ? timer - (now - timerStartAt) : timer, 0);
    const seconds = Math.ceil(mills / 1000);
    const minuteString = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secondString = String(seconds % 60).padStart(2, "0");
    const isDanger = seconds < 10;

    const getTimerColor = () => {
        if (timerStartAt) {
            return isDanger ? 'text-orange-600' : 'text-slate-900';
        }
        return "text-slate-200";
    };

    return (
        <div className="flex gap-3 items-center">
            <div className={`relative ${isRight && "order-3"}`}>
                <div className="flex items-center gap-2 text-start text-teal-600 w-44">
                    <Image src={avatar} alt="avatar" width={48} />
                    <div>
                        <div className="text-lg leading-tight">{name}</div>
                        <div className="text-slate-400 text-xs leading-tight">Рейтинг: {rating}</div>
                    </div>
                </div>
                <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
                    <GameSymbol symbol={symbol} />
                </div>
            </div>
            <div className={`h-6 w-px bg-slate-200 ${isRight && "order-2"}`} />
            <div className={`text-lg font-semibold ${isRight && "order-1"} ${getTimerColor()}`}>
                {minuteString}:{secondString}
            </div>
        </div>
    );
}