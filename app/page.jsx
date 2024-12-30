"use client"

import { useSearchParams } from "next/navigation";

import WallpaperCard from './components/WallpaperCard'


import ShowMore from './components/ShowMore';

import Loading from './loading';

import { useEffect, useState } from 'react';


export default function Home() {


  const searchParams = useSearchParams();
  const per_page = parseInt(searchParams.get("page") || 10);
  const nature = searchParams.get("query") || "nature"

  const [loadingstate, setloadingstate] = useState(false);
  const [images, setimages] = useState([]);

  useEffect(() => {
    setloadingstate(true);
    fetch(`/api?page=${per_page}&query=${nature}`).then(res => res.json())
      .then((json) => {

        setimages(json)
        setloadingstate(false)
      })
    console.log(images)

  }, [nature, per_page]);



  if (loadingstate === true && per_page === 10) {
    return <Loading />
  }

  return (

    <>

      <div className='wallpapers_wrapper md:mt-20 mt-32'>
        {images?.map((item, index) => (

          <WallpaperCard key={index} photoGrapher={item.photographer} avgColor={item.avg_color} wallpaperSrc={item.src.portrait} wallpaperOrg={item.src.portrait} />

        ))}
      </div>

      <div className='flex justify-center py-10'>

        <ShowMore loadingstate={loadingstate} perPage={per_page} />

      </div>


    </>
  )
}
