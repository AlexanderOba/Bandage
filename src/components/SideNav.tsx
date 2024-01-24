import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { BsCart, BsSearch } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import like from "../../public/like.png";
import burger from "../../public/burger.png";
import { useSelector } from 'react-redux';


export default function SideNav() {
    const cartListItem = useSelector((state: any) => state.cartList);
    const wishListItem = useSelector((state: any) => state.wishList);

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ right: open });
    };

    return (
        <div>
            <Button onClick={toggleDrawer(true)} sx={{ color: "#242424" }}>
                <Image src={burger} alt="like" width={28} height={28} className="mr-1" />
            </Button>
            <Drawer
                anchor="top"
                open={state.right}
                onClose={toggleDrawer(false)}
                sx={{ width: "70px" }}
            >
                <div className="flex items-center text-[18px] justify-between flex-col text-[#667085] w-full sm:justify-start ">
                    <Link href="/" className='block py-3' >
                        <p className="cursor-pointer nav-text mb-0 ">
                            Home
                        </p>
                    </Link>
                    <Link href="/" className='block py-3'>
                        <p className="cursor-pointer nav-text mb-0 ">
                            Shop
                        </p>
                    </Link>
                    <Link href="/" className='block py-3'>
                        <p className="cursor-pointer nav-text mb-0 ">
                            About
                        </p>
                    </Link>
                    <Link href="/" className='block py-3'>
                        <p className="cursor-pointer nav-text mb-0 ">
                            Blog
                        </p>
                    </Link>
                    <Link href="/" className='block py-3'>
                        <p className="cursor-pointer nav-text mb-0 ">
                            Contact
                        </p>
                    </Link>
                    <Link href="/" className='block py-3'>
                        <p className="cursor-pointer nav-text mb-0 ">
                            Pages
                        </p>
                    </Link>
                </div>
                
                <div>
                    <div className={` flex text-[#23A6F0] flex-col justify-center text-[20px] font-bold`}>
                        <div className="flex items-center justify-center mb-6"> <FaRegUser className="mr-2 text-[13px]" /> Login / Register</div>
                        <div className="flex items-center justify-center mb-6 "><BsSearch className="text-[20px]" /></div>
                        <div className="flex items-center justify-center mb-6  font-normal cursor-pointer"><BsCart className="text-[20px] mr-1" /> <p>{cartListItem.totalQuantity}</p></div>
                        <div className="flex items-center justify-center font-normal cursor-pointer" >
                            <Image src={like} alt="like" width={18} height={18} className="mr-1" />
                            <p>{wishListItem.totalQuantity}</p>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}