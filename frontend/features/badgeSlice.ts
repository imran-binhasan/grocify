import { createSlice } from '@reduxjs/toolkit';

// Get initial state from local storage
const getWishlistCount = () => {
    if (typeof window !== 'undefined') {
        const wishlist = JSON.parse(localStorage.getItem('addToWishlist'));
        return wishlist ? wishlist.length : 0;
    }
    return 0; // Fallback for SSR or non-browser environments
};

const getCartCount = () => {
    if (typeof window !== 'undefined') {
        const cart = JSON.parse(localStorage.getItem('addToCartData'));
        return cart ? cart.length : 0;
    }
    return 0; // Fallback for SSR or non-browser environments
};

const initialState = {
    wishlistProductsNo: getWishlistCount(),
    cartProductsNo: getCartCount(),
};

const badgeSlice = createSlice({
    name: 'badge',
    initialState,
    reducers: {
        updateWishlistCount: (state) => {
            state.wishlistProductsNo = getWishlistCount();
        },
        updateCartCount: (state) => {
            state.cartProductsNo = getCartCount();
        }
    }
});

export const { updateWishlistCount, updateCartCount } = badgeSlice.actions;
export default badgeSlice.reducer;
