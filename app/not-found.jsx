import Link from 'next/link'
import { Suspense } from 'react'

export default function NotFound() {
    return (


        <div className='h-screen flex flex-col justify-center items-center'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>

    )
}