import { db } from "./db";
import { Resend } from "resend";



const resend = new Resend("re_ewuN8Ve7_7cSgYNzmaAkSFeTWwceaKzwB");

const ownerEmail = "dumbirichuks@gmail.com"


export const sendEmailForm = async (
    email: string,
) => {

    try {
        const user = await db.email.findFirst({
            where: {
                email,
            }
        });


        if (user) {
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: ownerEmail,
                subject: "New Submission Form",
                html: `
                <div>
                <h2>Hello Dumbiri Chuks</h2>
                <p>You have a new Submission form</p>
                <br/>
                <br/>
                <h4>Name: ${user?.name}</h4/>
                <h4>Name: ${user?.email}</h4/>
                <h4>Name: ${user?.message}</h4/>
                </div>
                `
            });

            await db.email.delete({
                where: {
                    email
                }
            })
        } else {
            throw new Error("User not found in the database");
        }


    } catch (error) {
        console.log("Error sending Email", error);
    }

};