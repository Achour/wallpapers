import React from 'react'
import Image from 'next/image'



export default function WallpaperCard({ wallpaperSrc }) {

    return (
        <div className='group overflow-hidden w-full h-40 bg-slate-800 rounded-xl drop-shadow-md' >
            <Image
                alt="image"
                src={wallpaperSrc}
                fill
                className='object-cover rounded-xl group-hover:scale-150  duration-200'
            />
            <div className='p-5 w-full text-center  
            rounded-b-xl bg-white opacity-50
            invisible group-hover:visible absolute bottom-0'>
                <h1 className=' text-black font-bold'>View</h1>
            </div>
        </div >
    )
}
