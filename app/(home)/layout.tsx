import { Bottombar } from "./_components/bottombar";
import { LiveChat } from "./_components/live-chat";
import { MobileNavbar } from "./_components/mobile-navbar";
import { Sidebar } from "./_components/sidebar";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full dark:bg-slate-950 bg-white">
            <div className="h-[80px] md:pl-56 md:hidden flex fixed inset-y-0 w-full z-50">
                <MobileNavbar />
            </div>
            <div className="hidden md:flex h-full w-30 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="md:pl-30 h-full pt-[80px]">
                {children}
            </main>
            <div className="hidden md:flex md:pl-32 w-full h-[80px] fixed bottom-0 z-40">
                <Bottombar />
            </div>
            <div className="p-2 fixed bottom-4 right-2 z-40">
                <LiveChat />
            </div>
        </div>
    );
}
