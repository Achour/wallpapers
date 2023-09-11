"use client"

import WallpaperCard from '@/components/WallpaperCard'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from 'pexels';

import { fetchImages } from '@/utils/pexels';
import ShowMore from '@/components/ShowMore';
import { Suspense, useEffect } from 'react';
import Filters from '@/components/Filters';

import { useState } from 'react';

export default function Home() {
  const per_page = 10;
  const [images, setimages] = useState()
  const [more, setmore] = useState(10)
  const [nature, setnature] = useState("dog")
  const [loading, setloading] = useState(false)

  useEffect(() => {
    async function getData() {
      const data = await fetchImages(nature, more)
      setimages(data)
    }
    getData();
    return () => {
      setloading(false)

    }
  }, [nature, more])

  function handleClick() {
    setloading(true)
    setmore(more + 10)
  }

  return (

    <>
      <div className='text-gray-900 mb-10 flex justify-end'>
        <input onChange={(e) => setnature(e.target.value)} className='bg-slate-400 me-5 rounded-xl px-3 w-64 py-2' type="text" value={nature} />

      </div>

      <div className='wallpapers_wrapper'>
        {images?.map((item) => (
          <Suspense fallback={"loading....."}>
            <WallpaperCard wallpaperSrc={item.src.medium} />
          </Suspense>
        ))}
      </div>

      <div className='flex justify-center py-10'>


        <button disabled={loading} onClick={handleClick} className='bg-slate-950 px-5 py-3 rounded-xl text-white font-bold'>Get More </button>

      </div>

    </>
  )
}
