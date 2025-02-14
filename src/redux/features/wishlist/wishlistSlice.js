import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlistbooks: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const isExist = state.wishlistbooks.find((book) => book.isbn === action.payload.isbn);
      if (!isExist) {
        state.wishlistbooks.push(action.payload);
      } else {
        console.log("Item already in wishlist");
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistbooks = state.wishlistbooks.filter((book) => book.isbn !== action.payload.isbn);
    },
    clearWishlist: (state) => {
      state.wishlistbooks = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;