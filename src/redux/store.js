import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import wishReducer from './features/wishlist/wishlistSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishReducer,
  },
});