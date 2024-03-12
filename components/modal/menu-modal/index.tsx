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
import { menuItems } from "@/data";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./header";
import MenuFooter from "./menu-footer";
import { Close } from "@radix-ui/react-dialog";
import MenuClose from "./menu-close";


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
                <motion.div
                    className=""
                >

                    {menuItems.map(({ title, subjects }, idx) => {

                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: `${idx * 0.25}`, ease: 'easeInOut' }}
                            >

                                <Header heading={title}>
                                    {
                                        subjects.map(({ title }, idx) => {
                                            return (
                                                <motion.div
                                                    key={title}
                                                    className="mb-3"
                                                    initial={{ opacity: 0, y: 50 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: `${idx * 0.25}`, ease: 'easeInOut' }}
                                                >
                                                    {title}
                                                </motion.div>
                                            )
                                        })
                                    }
                                </Header>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <MenuFooter />
            </DialogContent>
        </Dialog>
    )
}

export default MenuModal
