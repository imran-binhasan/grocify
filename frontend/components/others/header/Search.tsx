import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import CartSheet from './CartSheet';
import Link from 'next/link';
const Search = () => {
    return (
        
        <div className='relative flex items-center w-9/12 sm:w-auto md:min-w-[400px]'>
            <div className='absolute pl-2'>
                <MagnifyingGlassIcon className='w-6 h-6'/>
            </div>
            <input
                className='pl-10 py-2 w-full text-sm rounded-sm border-solid border-[1px] border-gray-300'
                style={{
                    outline: "none"
                }}
                type="text" name="search" id=""
                placeholder='Search' />
            <button
                className='absolute top-0 bottom-0 -right-0 px-[9px] lg:px-6 text-white text-sm rounded-r-md bg-green-600'
                type="button"
            >
                Search
            </button>
        </div>
        
    );
};

export default Search;