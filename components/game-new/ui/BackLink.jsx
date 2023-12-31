import Link from "next/link";
import { ArrowLeftIcon } from "../../game/icons/ArrowLeftIcon";

export function BackLink() {
    return (
        <Link href="#" className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5">
            <ArrowLeftIcon />
            На главную
        </Link>
    );
}