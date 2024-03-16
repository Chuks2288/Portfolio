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

interface SearchbarProps {
    display: "large" | "small"
}

export const Searchbar = ({
    display
}: SearchbarProps) => {

    const [open, setOpen] = useState(false);


    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        }

        document.addEventListener("keydown", down);

        return () => document.removeEventListener("keydown", down);
    }, [])

    return (
        <>
            <ActionTooltip
                label="Search"
                side="top"
                align="center"
            >
                {display === "large" ? (
                    <button
                        onClick={() => setOpen(true)}
                        className="group rounded-full p-3 bg-slate-100 dark:bg-[#9690A214] group-hover:text-slate-300 transition-all"
                    >

                        <Search
                            size={20}
                            className="text-slate-900 dark:text-slate-200 group-hover:dark:text-slate-300"
                        />

                    </button>
                ) : (
                    <button
                        onClick={() => setOpen(true)}
                        className="group px-2 py-2 rounded-md flex items-center gap-x-2 
                    w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
                    >
                        <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                        <p
                            className="font-semibold text-sm text-zinc-500 dark:text-zinc-400 
                        group-hover:text-zinc-600 dark:group-hover:text-Zinc-300 transition"
                        >
                            Search
                        </p>

                        <kbd
                            className="pointer-events-none inline-flex h-5 select-none items-center gap-1
                        rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground
                        ml-auto"
                        >
                            <span className="text-xs">CTR</span>K
                        </kbd>
                    </button>
                )}

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

