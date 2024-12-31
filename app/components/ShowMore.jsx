"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ShowMore({ loadingstate, perPage }) {


    const [Loading, setLoading] = useState(false)
    const router = useRouter();

    function handleClick() {

        const nextPage = (perPage + 10)
        const newPathName = updateSearchParams("page", nextPage);

        router.push(newPathName, { scroll: false })
    }



    return (
        <>
            <Suspense>


                <button onClick={handleClick} className='bg-slate-950 rounded-lg text-white font-bold px-5 py-2'>

                    {loadingstate ? ("Loading") : "Show More"}



                </button>
            </Suspense>
        </>
    )
}
