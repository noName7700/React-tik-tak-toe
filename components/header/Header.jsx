import Image from "next/image";
import logo from "./logo.svg";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";
import { Profile } from "../profile/Profile";
import { UiButton } from "../uikit/UiButton";

export function Header() {
    return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
        <Image src={logo} alt="logo" />
        <div className="w-px h-8 bg-slate-200 mx-6" />
        <UiButton className="w-44" variant="primary" size="lg" >Играть</UiButton>
        <button className="ml-auto flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors">
            <Profile name="noName" rating="1230" />
            <ArrowDownIcon />
        </button>
    </header>
    );
}