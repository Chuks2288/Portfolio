import { Searchbar } from "./searchbar"

export const Bottombar = () => {
    return (
        <div className="flex w-full justify-between items-center p-2 bg-transparent">
            <Searchbar
                display="large"
            />
        </div>
    )
}

