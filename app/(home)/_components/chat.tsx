"use client"

import ChatModal from "@/components/modal/chat-modal"
import { Button } from "@/components/ui/button"
import { useChatModal } from "@/hook/use-chat-modal"


export const Chat = () => {
    const { onOpen } = useChatModal();

    return (
        <Button
            onClick={onOpen}
            size="sm"
            className="rotate-0 md:-rotate-90 mb-0 md:mb-10 font-semibold border-none bg-[#604D3C] text-white dark:hover:bg-[#57493c]"
        >
            Let&apos;s Chat
        </Button>
    )
}

