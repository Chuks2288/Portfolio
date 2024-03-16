import { Chat } from "./chat"
import { Logo } from "../../../components/logo"
import { MobileSidebar } from "./mobile-sidebar"

export const MobileNavbar = () => {
    return (
        <div className="p-6 flex justify-between items-center w-full shadow-sm bg-transparent border-b">
            <div className="flex items-center gap-x-4">
                <MobileSidebar />
                <Logo />
            </div>
            <Chat />
        </div>
    )
}
