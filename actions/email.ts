"use server"

import * as z from "zod";
import { db } from "@/lib/db";
import { emailSchema } from "@/schema";
import { sendEmailForm } from "@/lib/mail";


export const email = async (values: z.infer<typeof emailSchema>) => {
    try {
        const validateFields = emailSchema.safeParse(values);

        if (!validateFields.success) {
            return { error: "Invalid fields" };
        }

        const { name, email, message } = validateFields.data;

        await db.email.create({
            data: {
                name,
                email,
                message
            }
        });

        await sendEmailForm(email);


        return { success: "Email Sent Successfully!" };
    } catch (error) {
        return { error }
    }
};
