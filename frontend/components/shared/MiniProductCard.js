import React, { useCallback, useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import addToCartProducts from '../../utils/useAddToCartData';
import ProductModal from '../shared/ProductModal';
import addToWishlistProducts from '../../utils/useAddToWishlist';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartCount } from '../../features/badgeSlice';

// Memorized Icons component to prevent re-renders
const Icons = React.memo(({ handleOpen, handleAddToCartData, handleAddWishlistData, addToCart, wishlist }) => (
    <>
        <button
            type='button' title='Add to Cart'
            className={`p-1 md:p-2 border-solid border-[1px] border-slate-200 rounded-full opacity-80 cursor-pointer ${addToCart ? "bg-primary-color" : "bg-gray-100 hover:bg-gray-50 hover:opacity-70"}`}
            onClick={() => handleAddToCartData()}
        >
            <a className={`${addToCart ? "" : "pointer-events-none"}`} href="/products/shopping-cart/">
                <svg className={`${addToCart ? "fill-white opacity-100" : "fill-slate-700"}`}
                    height={"18px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                >
                    <path d="M27 25.15 25.28 10.5a2.93 2.93 0 0 0-3-2.5h-1.35c0-.19 0-.38-.06-.57-.22-1.54-.41-2.87-1.59-4a4.51 4.51 0 0 0-6.56 0c-1.18 1.14-1.37 2.47-1.59 4 0 .19 0 .38-.06.57H9.69a2.93 2.93 0 0 0-3 2.5L5 25.15a4.13 4.13 0 0 0 1 3.26A4.87 4.87 0 0 0 9.72 30h12.56a4.87 4.87 0 0 0 3.64-1.59A4.13 4.13 0 0 0 27 25.15zM13.11 7.71c.22-1.52.34-2.21 1-2.85A2.78 2.78 0 0 1 16 4a2.78 2.78 0 0 1 1.89.86c.66.64.78 1.33 1 2.85V8h-5.8c.01-.1.01-.19.02-.29zm11.31 19.37a2.83 2.83 0 0 1-2.14.92H9.72a2.83 2.83 0 0 1-2.14-.92 2.14 2.14 0 0 1-.58-1.7l1.7-14.65a.94.94 0 0 1 1-.73H11c0 .38.05.76.1 1.14a1 1 0 1 0 2-.28c0-.29 0-.57-.06-.86H19c0 .29 0 .57-.06.86a1 1 0 0 0 .8 1.14h.14a1 1 0 0 0 1-.86c.05-.38.08-.76.1-1.14h1.34a.94.94 0 0 1 1 .73L25 25.38a2.14 2.14 0 0 1-.58 1.7z" data-name="shopping bag" />
                </svg>
            </a>
        </button>
    </>
))

const MiniProductCard = ({ productDetail, productPage = false }) => {
    const dispatch = useDispatch();
    const { _id, title, newPrice, thumbnail, rating } = productDetail;
    const [isHovered, setIsHovered] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const [addToCart, setAddToCart] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    useEffect(() => {
        const addToCartProducts = JSON.parse(localStorage.getItem("addToCartData"));
        const addToWishlist = JSON.parse(localStorage.getItem("addToWishlist"));

        if (addToCartProducts) {
            setAddToCart(() => addToCartProducts.some((a) => a._id === _id));
        }
        if (addToWishlist) {
            setWishlist(() => addToWishlist.includes(_id));
        }
    }, [_id]);

    const handleAddToCartData = useCallback((_id) => {
        addToCartProducts(_id, 1);
        setAddToCart(true);
        dispatch(updateBadgeDataFromLocalStorage());
    }, [dispatch]);

    const handleAddWishlistData = useCallback(() => {
        addToWishlistProducts(_id);
        setWishlist((prev) => !prev);
        dispatch(updateBadgeDataFromLocalStorage());
    }, [_id, dispatch]);

    return (
        <div className='max-h-[120px] w-full flex p-1 border-solid border-gray-200 hover:border-green-600 border-[1px] rounded-md shadow-md hover:shadow-green-300'>
            <figure className='w-full max-w-24'>
                <a href={`/products/${_id}`}>
                    <img className='h-[100px] min-w-full object-contain mx-auto' loading="lazy" src={thumbnail} alt="Product" />
                </a>
            </figure>
            <div className='p-2 w-full my-auto'>
                <h1>{title}</h1>
                <Icons handleOpen={handleOpen} handleAddToCartData={() => handleAddToCartData(_id)} handleAddWishlistData={handleAddWishlistData} wishlist={wishlist} addToCart={addToCart} />
            </div>
        </div>
    );
};

export default MiniProductCard;
