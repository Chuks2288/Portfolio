import { motion } from "framer-motion"

import { menuItems } from "@/data";
import Header from "./header";
import { Close } from "@radix-ui/react-dialog";

export const MenuContent = () => {
    return (
        <div>
            <motion.div
                className=""
            >

                {menuItems.map(({ title, subjects }, idx) => {

                    return (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: `${idx * 0.25}`, ease: 'easeInOut' }}
                        >

                            <Header heading={title} key={title} display="large">
                                {
                                    subjects.map(({ title }, idx) => {
                                        return (
                                            <motion.div
                                                key={title}
                                                className="mb-3 cursor-pointer"
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: `${idx * 0.25}`, ease: 'easeInOut' }}
                                            >
                                                {title}
                                            </motion.div>
                                        )
                                    })
                                }
                            </Header>
                        </motion.div>
                    )
                })}
            </motion.div>
        </div>
    )
}

