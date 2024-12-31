"use client"
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function Filters() {

    const searchParams = useSearchParams();

    const router = useRouter();

    const [Category, setCategory] = useState(searchParams.get("query") || "")



    function handleChange(keyword) {
        setCategory(keyword)
    }

    function handleSubmit(key) {
        if (key == "Enter") {

            const pathname = updateSearchParams('query', Category.toLowerCase(), true)
            router.push(pathname, { scroll: false })
        }
    }

    return (
        <Suspense>

            <input
                placeholder="Search for a wallpaper"
                onKeyDown={(e) => handleSubmit(e.key)}
                onChange={(e) => handleChange(e.target.value)}
                className='tex-slate-950 bg-transparent/50 me-5 md:w-64 w-full rounded-xl px-3 py-2'
                type="text"
                value={Category} />

        </Suspense>
    )
}
