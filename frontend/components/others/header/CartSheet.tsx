"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { BackpackIcon, HeartIcon } from "@radix-ui/react-icons"


type CartSheet = (typeof SHEET_SIDES)[number]

const CartSheet = () => {
    return (
        <div>

            <Sheet>
                <SheetTrigger asChild>


                    <div className="flex items-center gap-3 p-1">
                        <BackpackIcon className="w-6 h-6" />
                        <div className="flex flex-col">
                            <span className="text-sm">Shopping Cart</span>
                            <span>$50</span>

                        </div>

                    </div>
                </SheetTrigger>
                <SheetContent side={'right'}>
                    <SheetHeader>
                        <SheetTitle>Shopping Cart</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Checkout</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

        </div>
    )
}
export default CartSheet
