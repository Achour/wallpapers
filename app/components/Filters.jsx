"use client"
import { useSearchParams } from "next/navigation";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { updateSearchParams } from '@/utils/pexels'

import { Input } from "@/components/ui/input";

import { Search } from 'lucide-react';



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
        <>

            <Input
                type="text"
                placeholder="Search for a wallpaper"
                onKeyDown={(e) => handleSubmit(e.key)}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full pl-10 py-3 text-lg"
                value={Category}
            />
            <Search
                className="absolute w-65 left-3 top-1/2 -translate-y-1/2 text-gray-700"
                size={24}
            />



        </>
    )
}
