"use client"
import React from 'react'
import { Popover } from '@headlessui/react'
import Filters from '@/components/Filters';
import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Navbar() {
    let [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(true)
    }

    return (
        <header>
            < div className='container mx-auto max-w-[1000px]' >
                <div className="flex justify-between items-center">

                    <ul className='flex justify-center gap-5'>
                        <li><a href="/">Home</a></li>
                        <li><a href="https://achourdart.vercel.app">Blog</a></li>
                    </ul>
                    <Filters />


                </div>
            </div>
        </header >
    )
}
