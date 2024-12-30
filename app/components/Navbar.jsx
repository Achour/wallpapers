"use client"
import React from 'react'
import { Popover } from '@headlessui/react'
import Filters from './Filters';
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
                <div className="flex md:flex-row flex-col gap-y-4 md:justify-between md:items-center">

                    <ul className='flex  gap-5'>
                        <li><a href="/">Home</a></li>
                        <li><a target='_blank' href="https://mrdigitus.com/">Portfolio</a></li>
                        <li><a target='_blank' href="https://github.com/Achour/image-gallery">Source Code</a></li>
                    </ul>
                    <Filters />


                </div>
            </div>
        </header >
    )
}
