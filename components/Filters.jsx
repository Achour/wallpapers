"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { updateSearchParams } from '@/utils/pexels'
export default function Filters() {

    const router = useRouter();

    const [Category, setCategory] = useState("Nature")

    function handleChange(keyword) {
        setCategory(keyword)
    }

    function handleSubmit(key) {
        if (key == "Enter") {
            const pathname = updateSearchParams('query', Category.toLowerCase())
            alert(pathname)
            router.push(pathname, { scroll: false })
        }
    }

    return (
        <div className='text-gray-900 mb-10 flex justify-end'>
            <input onKeyDown={(e) => handleSubmit(e.key)} onChange={(e) => handleChange(e.target.value)} className='bg-slate-400 me-5 w-64 rounded-xl px-3 py-2' type="text" value={Category} />

        </div>
    )
}
