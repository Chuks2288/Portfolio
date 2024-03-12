"use client";

import { useMenuModal } from "@/hook/use-menu-modal";
import { X } from "lucide-react";

const MenuClose = () => {

    const { onClose } = useMenuModal();

    return (
        <div
            onClick={onClose}
            className="absolute left-4 top-[50%] cursor-pointer ml-3
            rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-7 w-7" />
            <span className="sr-only">Close</span>
        </div>
    )
}

export default MenuClose;