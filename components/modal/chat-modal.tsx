"use client"

import { useState, useTransition } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useChatModal } from "@/hook/use-chat-modal"
import { emailSchema } from "@/schema";
import { Textarea } from "../ui/textarea";
import { Loader2 } from "lucide-react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

import { email } from "@/actions/email"

import { toast } from "sonner";



interface formDetailsProps {
    name: "name" | "email";
    placeholder: string;
    type: string;
}

export const formDetails = [
    {
        name: "name",
        placeholder: "Full Name",
        type: "text",
    },
    {
        name: "email",
        placeholder: "Email",
        type: "email",
    }
] as formDetailsProps[];



const ChatModal = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const { isOpen, onClose } = useChatModal();



    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        }
    })

    const onSubmit = (values: z.infer<typeof emailSchema>) => {
        // console.log(values)
        setError("");
        setSuccess("");

        startTransition(() => {
            email(values)
                .then((data: any) => {
                    if (data?.error) {
                        form.reset();
                        setError(data.error);
                    }

                    if (data?.success) {
                        form.reset();
                        setSuccess(data.success);

                        setTimeout(() => {
                            onClose();
                            setSuccess("");
                        }, 1000);

                        setTimeout(() => {
                            toast.success("Thanks for reaching out, We will get back to you shortly");
                        }, 1500);


                    }
                })
                .catch(() => setError("Something went wrong"));
        });
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}
        >
            <DialogContent
                className="p-10 overflow-hidden max-w-[425px]"
                showCloseButton
            >
                <DialogHeader className="">
                    <DialogTitle className="text-2xl text-center">
                        Take A Coffee & Chat With <br /> Me!
                    </DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">

                            {formDetails.map(({ name, placeholder, type }) => (
                                <FormField
                                    key={name}
                                    control={form.control}
                                    name={name}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder={placeholder}
                                                    type={type}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Message"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button
                            disabled={isPending}
                            type="submit"
                            className="w-full"
                        >
                            {
                                isPending ?
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    :
                                    "Send Email"
                            }
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default ChatModal
