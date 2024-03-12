"use client"

import { useChatModal } from "@/hook/use-chat-modal"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


const ChatModal = () => {

    const { isOpen, onClose } = useChatModal();

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}
        >
            <DialogContent
                className="p-6 overflow-hidden max-w-[425px]"
                showCloseButton
            >
                <DialogHeader className="">
                    <DialogTitle className="">
                        I'm Ready at your service
                    </DialogTitle>
                    <DialogDescription className="">
                        chat
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    modal
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ChatModal
