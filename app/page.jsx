

import WallpaperCard from '@/components/WallpaperCard'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from 'pexels';

import { fetchImages } from '@/utils/pexels';
import ShowMore from '@/components/ShowMore';
import { Suspense } from 'react';
import Filters from '@/components/Filters';


export default async function Home({ searchParams }) {

  const per_page = parseInt(searchParams.page || 10);
  const nature = searchParams.query || "nature"
  console.log(per_page)
  const images = await fetchImages(nature, per_page);

  return (

    <>
      <Filters />

      <div className='wallpapers_wrapper'>
        {images?.map((item) => (
          <Suspense fallback={"loading....."}>
            <WallpaperCard wallpaperSrc={item.src.medium} />
          </Suspense>
        ))}
      </div>

      <div className='flex justify-center py-10'>

        <ShowMore perPage={per_page} />

      </div>

    </>
  )
}
