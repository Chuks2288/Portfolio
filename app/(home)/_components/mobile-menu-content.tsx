
import { menuItems } from "@/data";
import Header from "@/components/modal/menu-modal/header";

export const MobileMenuContent = () => {
    return (
        <div>
            <div
                className="pt-10 pl-3"
            >

                {menuItems.map(({ title, subjects }, idx) => {

                    return (
                        <div
                        >
                            <Header heading={title} key={title} display="small">
                                {
                                    subjects.map(({ title }, idx) => {
                                        return (
                                            <div
                                                key={title}
                                                className={` ${idx === -1 ? "mb-7" : "mb-4"} cursor-pointer`}
                                            >
                                                {title}
                                            </div>
                                        )
                                    })
                                }
                            </Header>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

