import Logo from "../common/Logo";
import CartSheet from "./CartSheet";
import Search from "./Search";
import { HeartIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator"
import Nav from "../common/Nav";
import Call from "./Call";

const Header = () => {
    
    return (
        <header className="md:py-2 lg:py-3 container p-1 md:px-6 mx-auto ">
            <div className="flex justify-between items-center mx-auto pb-1">
                <Logo />
                <Search />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <HeartIcon className="w-6 h-6"/>
                    <Separator orientation="vertical" />
                    <CartSheet />
                </div>
            </div>

            <Separator orientation="horizontal" className="my-1" />

            <div className="flex justify-between items-center mx-auto mt-4 md:mt-0">
                <Nav/>
                <div className="flex items-center gap-2">
                    <Call/>
                    <span>+8801601262260</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
