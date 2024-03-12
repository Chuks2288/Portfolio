import { Plus } from "lucide-react";
import { useState } from "react";

interface headingProps {
    children: React.ReactNode;
    heading: string;
}

const Header = ({
    children,
    heading,
}: headingProps) => {

    const [open, setOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="w-[300px] relative"
        >
            <div
                className="group flex justify-between items-center cursor-pointer mb-6 transition-all">
                <h2
                    className="text-3xl font-bold transition-transform duration-500 ease-in-out group-hover:translate-x-8 group-hover:dark:text-slate-300">
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
                    <div className="text-3xl">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;