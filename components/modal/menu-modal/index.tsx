"use client"

import { motion } from "framer-motion"

import { useMenuModal } from "@/hook/use-menu-modal"
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MenuFooter from "./menu-footer";
import MenuClose from "./menu-close";
import { MenuContent } from "./menu-content";


const MenuModal = () => {
    const router = useRouter();
    const { isOpen, onClose } = useMenuModal();

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}
        >
            <DialogContent
                className="max-w-full h-full pt-[10%]  border-none shadow-none transition-all rounded-none flex flex-col justify-center pl-[100px]"
            >
                <MenuClose />
                <MenuContent />

                <MenuFooter />
            </DialogContent>
        </Dialog>
    )
}

export default MenuModal
