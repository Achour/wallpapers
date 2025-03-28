"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { updateSearchParams } from '@/utils/pexels';

import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"

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

            <Button disabled={loadingstate} onClick={handleClick} >
                {loadingstate ? (
                    <>
                        <Loader className='animate-spin' /> Loading
                    </>
                ) : "Show More"}
            </Button>

        </>
    )
}
