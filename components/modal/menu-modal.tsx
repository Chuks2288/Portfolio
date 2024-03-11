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
import { Plus } from "lucide-react";

interface headingProps {
    children: React.ReactNode;
    heading: string;
}

const Header = ({
    children,
    heading,
}: headingProps) => {

    const [open, setOpen] = useState(false);


    // const OnOpen = () => {
    //     setOpen(true)
    // }
    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="w-[300px] relative"
        >
            <div
                className="group flex justify-between items-center cursor-pointer mb-6 transition-all">
                <h2 className="text-3xl font-bold transition-transform duration-500 ease-in-out group-hover:translate-x-8 group-hover:dark:text-slate-300">
                    {heading}
                </h2>
                <div className="group-hover:rotate-[135deg] transition-transform duration-500 ease-in-out">
                    <Plus className="w-6 h-6 transition" />
                </div>
            </div>
            {open && (
                <div
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                    className="absolute top-full -right-80 -mt-8 w-full group"
                >
                    <h4 className="text-2xl">
                        {children}
                    </h4>
                </div>
            )}
        </div>
    )
}


const MenuModal = () => {
    const router = useRouter();
    const { isOpen, onClose } = useMenuModal();



    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}
        >
            <DialogContent
                className="max-w-full h-full border-none shadow-none transition-all rounded-none flex flex-col justify-center"
            >
                <div className="">
                    {menuItems.map(({ title, subjects }) => {

                        return (
                            <Header heading={title}>
                                {
                                    subjects.map(({ title }) => {
                                        return (
                                            <motion.div
                                                key={title}
                                                className="mb-3"
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {title}
                                            </motion.div>
                                        )
                                    })
                                }
                            </Header>
                        )
                    })}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default MenuModal
