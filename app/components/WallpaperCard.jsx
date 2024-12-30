"use client"
import React from 'react'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'

import { getAverageColor } from '@/utils/pexels'

export default function WallpaperCard({ photoGrapher, wallpaperSrc, wallpaperOrg, avgColor }) {

    let [isOpen, setIsOpen] = useState(false);

    const getTextColor = (hex) => {
        const hexToRgb = (hex) => {
            const cleanedHex = hex.replace("#", "");
            const bigint = parseInt(cleanedHex, 16);
            return {
                r: (bigint >> 16) & 255,
                g: (bigint >> 8) & 255,
                b: bigint & 255,
            };
        };

        const { r, g, b } = hexToRgb(hex);
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        return luminance > 128 ? "#000" : "#FFF";
    };

    // Dynamically determine the text color based on avgColor
    const textColor = getTextColor(avgColor);



    async function handleClick() {

        setIsOpen(true)
    }

    return (
        <>
            <div
                style={{ backgroundColor: avgColor }}
                className="bg-red-600 rotate-2 relative rounded-xl shadow-2xl drop-shadow-md ">


                <div
                    style={{ backgroundColor: avgColor }}
                    className=' -rotate-2 relative group w-full h-72 md:h-96 rounded-xl ' >


                    <Image
                        alt="image"
                        src={wallpaperSrc}
                        fill
                        className=' object-cover rounded-xl   duration-200'
                    />


                    <div
                        // style={{ backgroundColor: avgColor }}
                        style={{ color: textColor, backgroundColor: `${avgColor}FC` }}


                        className={`absolute rounded-b-xl  bottom-0 text-black w-full p-4 `}>

                        <div className='flex justify-between gap-x-2   items-center text-sm'>
                            <div>

                                <h1>Photographer: {photoGrapher} </h1>

                            </div>
                            <button
                                style={{ color: textColor }}
                                className='bg-white/50 font-bold rounded-full  py-1 px-2 '
                                onClick={handleClick} >View</button>
                        </div>
                    </div>

                </div>





                <Dialog

                    className="fixed top-0 w-full 
                z-[200]
                h-screen
            backdrop-blur-xl bg-white/10 
            flex justify-center items-center" open={isOpen} onClose={() => setIsOpen(false)}>
                    <Dialog.Panel
                        className="relative
                
                    max-w-[400px] overflow-hidden
                    bg-white text-slate-950 rounded-xl">
                        <img className='object-contain ' src={wallpaperOrg} alt="" />
                        <div className="absolute w-full p-2 bottom-0 flex justify-between gap-x-2">

                            <button onClick={() => setIsOpen(false)} className='w-full border border-white/20 bg-red-600/50 backdrop-blur-md py-2 px-4 rounded-xl'>Cancle</button>
                            <button onClick={() => setIsOpen(false)} className='w-full border border-white/20 bg-white/50 backdrop-blur-md  py-2 px-4 rounded-xl'>Download</button>
                        </div>
                    </Dialog.Panel>
                </Dialog>

            </div>
        </>
    )
}
