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

    async function handleDownLoad(imageUrl) {
        try {
            // Fetch the image as a Blob
            const response = await fetch(imageUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch the image.');
            }
            const blob = await response.blob();

            // Create a temporary link to trigger the download
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'downloaded-image.jpg'; // Filename for the downloaded file
            a.style.display = 'none'; // Hide the link element
            document.body.appendChild(a);
            a.click(); // Trigger download
            document.body.removeChild(a); // Clean up

            // Clean up the object URL
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    }

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


                        className={`absolute rounded-b-xl  bottom-0 text-black w-full p-2 md:p-4 `}>

                        <div className='flex justify-between gap-x-2   items-center text-xs  md:text-sm'>
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
                            <button onClick={() => handleDownLoad(wallpaperOrg)} className='w-full border border-white/20 bg-white/50 backdrop-blur-md  py-2 px-4 rounded-xl'>Download</button>
                        </div>
                    </Dialog.Panel>
                </Dialog>

            </div>
        </>
    )
}
