import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import CartSheet from './CartSheet';
const Search = () => {
    return (
        <div>


            <div className="flex w-full max-w-sm items-center space-x-2">

                <Input type="email" placeholder="Email" />
                <Button type="submit">Search</Button>
            </div>
            

        </div>
    );
};

export default Search;