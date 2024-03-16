import { Chat } from "./chat"
import { Logo } from "../../../components/logo"
import Menu from "./menu"

import { ModeToggle } from "@/components/mode-toggle";

export const Sidebar = () => {
    return (
        <div className="h-full border-r flex flex-col justify-between items-center shadow-sm bg-transparent p-1">
            <Logo />
            <Menu
            />
            <Chat />
            {/* <ModeToggle /> */}
        </div>
    )
}

