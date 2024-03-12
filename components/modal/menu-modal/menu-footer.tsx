import { Facebook, Instagram, Linkedin } from "lucide-react"


interface socialsProps {
    link: string;
    icon: JSX.Element
}

const socials = [
    {
        link: "https://www.linkedin.com/in/chuks-dumbiri-38197419a",
        icon: <Linkedin size={15} />
    },
    {
        link: "https://www.instagram.com/chuk.stech/",
        icon: <Instagram size={15} />
    },
    {
        link: "www.facebook.com",
        icon: <Facebook size={15} />
    },
] as socialsProps[];



const MenuFooter = () => {
    return (
        <div className="mt-[10%] max-w-[60%] flex justify-between items-start">
            <div className="flex flex-col gap-y-1">
                <h4 className="mb-2 font-bold">Get In Touch</h4>
                <div className="text-sm flex flex-col text-black dark:text-[#635D6F] tracking-">
                    <p className="">
                        5, Saint Anthony Street, Edo State, Nigeria.
                    </p>
                    <a href="mailto:dumbirichuks@gmail.com">
                        dumbirichuks@gmail.com
                    </a>
                    <span>
                        Ph: <a href="tel:+2347064923498">+2347064923498</a>
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-y-1">
                <h4 className="mb-2 font-bold">Work Enquiries</h4>
                <div className="text-sm flex flex-col text-black dark:text-[#635D6F]">
                    <a href="mailto:dumbirichuks@gmail.com">
                        dumbirichuks@gmail.com
                    </a>
                    <span>
                        Ph: <a href="tel:+2347064923498">+2347064923498</a>
                    </span>
                </div>
            </div>
            <div className="flex justify-between items-center gap-x-3">
                {socials.map(({ link, icon }) => (
                    <a href={link}
                        className="cursor-pointer"
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default MenuFooter