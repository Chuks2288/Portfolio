"use client";

import { AlignLeft } from "lucide-react"

import ActionTooltip from "@/components/action-tooltip"
import { useMenuModal } from "@/hook/use-menu-modal"
import { useMobileSidebar } from "@/hook/use-mobile-sidebar";

interface MenuProps {
    device: "medium" | "mobile"
}

const Menu = ({
    device
}: MenuProps) => {

    const { onOpen: onOpenLarge } = useMenuModal();

    // const { onOpen: onOpenMobile } = useMobileSidebar();

    // const handleClick = () => {
    //     if (device === "medium") {
    //         onOpenMobile();
    //     } else {
    //         onOpenLarge();
    //     }
    // };

    return (
        <div>

            <ActionTooltip
                label="Menu"
                side="right"
                align="center"
            >
                <button
                    onClick={onOpenLarge}
                    className="group"
                >
                    <div className="flex w-[58px] h-[58px] rounded-[30px] justify-center items-center bg-slate-100 dark:bg-[#9690A214] group-hover:text-slate-300 transition-all">
                        <AlignLeft
                            size={25}
                            className="text-slate-900 dark:text-slate-200 group-hover:dark:text-slate-300"
                        />
                    </div>
                </button>
            </ActionTooltip>
        </div>
    )
}

export default Menu;
