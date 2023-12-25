import Image from "next/image";
import avatarSrc from "./avatar.png";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
    return (
        <div className={`flex items-center gap-2 text-start text-teal-600 ${className}`}>
            <Image src={avatar} alt="avatar" width={48} />
            <div>
                <div className="text-lg leading-tight">{name}</div>
                <div className="text-slate-400 text-xs leading-tight">Рейтинг: {rating}</div>
            </div>
        </div>
    );
}