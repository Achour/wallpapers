"use client"
import React from 'react'
import { Popover } from '@headlessui/react'

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
                        <li>Home</li>
                        <li>Portfolio</li>
                    </ul>
                    <button onClick={handleClick} className='bg-zinc-100 text-black px-5 py-2 rounded-full'>Submit</button>


                </div>
            </div>
        </header >
    )
}
