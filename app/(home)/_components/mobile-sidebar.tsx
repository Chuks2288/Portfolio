"use client";

import { useEffect, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hook/use-mobile-sidebar";

import { usePathname } from "next/navigation";
import { menuItems } from "@/data";
import MenuClose from "@/components/modal/menu-modal/menu-close";

import { motion } from "framer-motion";
import Header from "@/components/modal/menu-modal/header";
import MenuFooter from "@/components/modal/menu-modal/menu-footer";
import { MenuContent } from "@/components/modal/menu-modal/menu-content";
import ActionTooltip from "@/components/action-tooltip";
import { AlignLeft } from "lucide-react";
import { MobileMenuContent } from "./mobile-menu-content";
import { Searchbar } from "./searchbar";

export const MobileSidebar = () => {


    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);


    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <ActionTooltip
                        label="Menu"
                        side="right"
                        align="center"
                    >
                        <button
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
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="p-2 pt-20"
                >
                    <Searchbar
                        display="small"
                    />
                    <MobileMenuContent />
                    <MenuFooter />
                </SheetContent>
            </Sheet>
        </>
    )
}

