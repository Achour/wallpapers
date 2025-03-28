"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Filters from '@/app/components/Filters';

const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="border-b py-16  flex items-center justify-start">
            <div className="container">

                {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50 blur-3xl"></div> */}


                <h1 className="text-4xl font-bold  mb-6">
                    Wallpapers That Inspire
                </h1>

                <div className="relative md:w-64 w-full">
                    <Filters />

                </div>
            </div>
        </div>
    );
};

export default Hero;