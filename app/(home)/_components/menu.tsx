"use client";

import { AlignLeft } from "lucide-react"

import ActionTooltip from "@/components/action-tooltip"
import { useMenuModal } from "@/hook/use-menu-modal"

const Menu = () => {

    const { onOpen: onOpenLarge } = useMenuModal();

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
