"use client"
import React from 'react'
import Image from 'next/image'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function WallpaperCard({ wallpaperSrc, wallpaperOrg }) {

    let [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(true)
    }

    return (
        <>
            <div className='flex flex-row justify-center relative group overflow-hidden w-full h-40 bg-slate-800 rounded-xl drop-shadow-md' >
                <Image
                    alt="image"
                    src={wallpaperSrc}
                    fill
                    className='object-cover rounded-xl group-hover:scale-150  duration-200'
                />
                <button onClick={handleClick} className='p-5 w-2/3 font-bold
            rounded-xl backdrop-blur-xl bg-white/10
            invisible group-hover:visible absolute bottom-5'>
                    View
                </button>
            </div >



            <Dialog
                className="fixed top-0 w-full 
            h-screen backdrop-blur-xl bg-white/10 
            flex justify-center items-center" open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel className=" bg-white text-slate-950 p-2 rounded-xl">
                    <img className='max-w-lg max-h-screen' src={wallpaperOrg} alt="" />
                </Dialog.Panel>
            </Dialog>
        </>
    )
}
