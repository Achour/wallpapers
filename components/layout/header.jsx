"use client"
import React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Github } from "lucide-react"
import { ModeToggle } from '@/components/mode-toggle';

export default function Header() {
    let [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(true)
    }

    return (

        <header className='border-b h-16 flex items-center'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <ul className='flex  gap-4'>
                        <li><a href="/">Home</a></li>
                        <li><a target='_blank' href="https://mrdigitus.com/">Portfolio</a></li>
                        <li><a target='_blank' href="https://x.com/mr_digitus">Contact</a></li>
                    </ul>
                    <div className='flex gap-4'>
                        <ModeToggle />
                        <Button asChild>
                            <a target='_blank' href="https://github.com/Achour/">
                                <Github />
                                GitHub
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </header >

    )
}
