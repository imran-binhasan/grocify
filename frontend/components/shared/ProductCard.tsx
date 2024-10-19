'use client'
import React, { useContext, useState, useCallback, useMemo, useEffect, memo } from 'react';
import Rating from '@mui/material/Rating';
import Link from 'next/link';
import Image from 'next/image';
import addToCartProducts from '@/utils/useAddToCartData';
import addToWishlistProducts from '@/utils/useAddToWishlist';
import ProductModal from './ProductModal';
import { updateCartCount,updateWishlistCount } from '../../features/badgeSlice';
import { useDispatch } from 'react-redux';

// Memoized Icons component to prevent re-renders
const Icons = memo(({ handleOpen, handleAddWishlistData, wishlist }) => (
    <>
        {/* wishlist */}
        <button
            type='button' title='Add to Wishlist'
            className={`p-1 md:p-2 rounded-full opacity-75 hover:opacity-100 bg-opacity-40 cursor-pointer block ${wishlist ? "bg-red-200" : "bg-gray-100"}`}
            onClick={handleAddWishlistData}
        >
            <svg className={`${wishlist ? "fill-red-500" : "fill-slate-700"}`} height={"20px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9z" />
            </svg>
        </button>
        {/* modal */}
        <button
            type='button' title='Preview'
            className='bg-gray-100 p-1 md:p-2 rounded-full opacity-75 hover:opacity-100'
            onClick={handleOpen}
        >
            <svg className='fill-slate-700' height={"20px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80z" />
            </svg>
        </button>
    </>
));

const ProductCard = ({ productDetail }) => {

    const dispatch = useDispatch()

    const { _id, title, newPrice, thumbnail, rating } = productDetail;

    const [isHovered, setIsHovered] = useState(false);
    const [open, setOpen] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const [addToCart, setAddToCart] = useState(false);

    const handleOpen = useCallback(() => setOpen(true), []);

    const updateBadgeDataFromLocalStorage = () => {
        dispatch(updateWishlistCount());
        dispatch(updateCartCount());
    };
    useEffect(() => {
        const addToCartProducts = JSON.parse(localStorage.getItem("addToCartData"));
        const addToWishlist = JSON.parse(localStorage.getItem("addToWishlist"));
        updateBadgeDataFromLocalStorage();

        if (addToCartProducts) {
            setAddToCart(() => addToCartProducts.some((a) => a._id === _id));
        }
        if (addToWishlist) {
            setWishlist(() => addToWishlist.includes(_id));
        }
    }, [_id, updateBadgeDataFromLocalStorage]);

    const handleAddToCartData = useCallback(() => {
        addToCartProducts(_id, 1);
        setAddToCart(true);
        updateBadgeDataFromLocalStorage();
    }, [_id, updateBadgeDataFromLocalStorage]);

    const handleAddWishlistData = useCallback(() => {
        addToWishlistProducts(_id);
        setWishlist((prev) => !prev);
        updateBadgeDataFromLocalStorage();
    }, [_id, updateBadgeDataFromLocalStorage]);

    const hoverHandlers = useMemo(() => ({
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false)
    }), []);

    return (
        <div className='h-full max-w-[280px] mx-auto border-solid border-gray-200 hover:border-green-600 border-[1px] rounded-md shadow-md hover:shadow-green-300'>
            <div className='h-[200px] w-full relative mb-4' {...hoverHandlers}>
                <div className={`absolute right-4 top-4 space-y-2 ${isHovered ? `block` : `hidden`}`}>
                    <Icons handleOpen={handleOpen} handleAddWishlistData={handleAddWishlistData} wishlist={wishlist} />
                    <ProductModal productDetail={productDetail} open={open} setOpen={setOpen} />
                </div>
                <Link href={`/products/${_id}`} className='cursor-pointer'>
                    <Image
                        className='h-full max-h-[200px] w-full object-contain mx-auto'
                        loading="lazy"
                        src={thumbnail}
                        alt={title}
                        width={280}
                        height={200}
                    />
                </Link>
            </div>
            <div className='px-4 pb-4 flex items-center justify-between'>
                <div className='space-y-1'>
                    <Link href={`/products/${_id}`} className='cursor-pointer'>
                        <div className='text-sm text-slate-600 font-normal hover:text-primary-color'>
                            <h1>{title}</h1>
                        </div>
                    </Link>
                    <p className='font-medium'>${newPrice.toFixed(2)}</p>
                    <div>
                        <Rating name="read-only" value={rating} readOnly precision={0.5} size='small' />
                    </div>
                </div>
                <button
                    type='button' title='Add to Cart'
                    className={`p-2 rounded-full cursor-pointer ${addToCart ? "fill-white bg-primary-color hover:opacity-90" : "fill-[#231f20] bg-slate-100 hover:opacity-80"}`}
                    onClick={handleAddToCartData}
                >
                    <span className={`${addToCart ? "" : "pointer-events-none"}`}>
                        🛒
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
