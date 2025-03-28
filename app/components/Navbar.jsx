"use client"
import React from 'react'
import { Popover } from '@headlessui/react'
import Filters from './Filters';
import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Button } from '@/components/ui/button';
import { Github } from "lucide-react"

export default function Navbar() {
    let [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(true)
    }

    return (

        <header className='border-b h-16 flex items-center'>
            <div className="container">
                <div className="flex gap-y-4 justify-between items-center">
                    <ul className=' flex  gap-5'>
                        <li><a href="/">Home</a></li>
                        <li><a target='_blank' href="https://mrdigitus.com/">Portfolio</a></li>
                        <li><a target='_blank' href="https://x.com/mr_digitus">Contact</a></li>
                    </ul>
                    <Button>
                        <Github />
                        GitHub
                    </Button>
                </div>
            </div>
        </header >

    )
}
