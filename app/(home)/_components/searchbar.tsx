"use client";

import { Search } from "lucide-react"
import { useState, useEffect } from "react";

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import ActionTooltip from "@/components/action-tooltip"
import { searchData } from "@/data";

export const Searchbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <ActionTooltip
                label="Search"
                side="top"
                align="center"
            >
                <button
                    onClick={() => setOpen(true)}
                    className="group rounded-full p-3 bg-slate-100 dark:bg-[#9690A214] group-hover:text-slate-300 transition-all"
                >

                    <Search
                        size={20}
                        className="text-slate-900 dark:text-slate-200 group-hover:dark:text-slate-300"
                    />

                </button>
            </ActionTooltip>


            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search all channels" />
                <CommandList>
                    <CommandEmpty>
                        No Results found
                    </CommandEmpty>
                    {searchData.map(({ label, data }) => {

                        if (!data?.length) return null;

                        return (
                            <CommandGroup key={label} heading={label}>
                                {data?.map(({ id, name }) => {

                                    return (
                                        <CommandItem key={id} >

                                            <span>{name}</span>
                                        </CommandItem>
                                    )
                                })}
                            </CommandGroup>
                        )
                    })}
                </CommandList>
            </CommandDialog>
        </>
    )
}

