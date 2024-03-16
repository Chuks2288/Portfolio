import * as z from "zod";

export const emailSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }),
    email: z.string().email({
        message: "Email is required",
    }),
    message: z.string().min(1, {
        message: "Message is required"
    }),
});