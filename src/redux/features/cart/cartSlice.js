import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartbooks: [],
  selectedBooks: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.05,
  grandTotal: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.cartbooks.find((book) => book.isbn === action.payload.isbn);
      if (!isExist) {
        state.cartbooks.push({ ...action.payload, quantity: 1 })
      } else {
        console.log("Item already in cart");
      }

      state.selectedBooks = setSelectedBooks(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    updateQuantity: (state, action) => {
      const cartbooks = state.cartbooks.map((book) => {
        if (book.isbn === action.payload.isbn) {
          if (action.payload.type === 'increment') {
            book.quantity += 1;
          }
          else if (action.payload.type === 'decrement') {
            if (book.quantity > 1) {
              book.quantity -= 1;
            }
          }
        }
        return book;
      });
      state.selectedBooks = setSelectedBooks(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    removeFromCart: (state, action) => {
      state.cartbooks = state.cartbooks.filter((book) => book.isbn !== action.payload.isbn);
      state.selectedBooks = setSelectedBooks(state);
      state.totalPrice = setTotalPrice(state);
      state.tax = setTax(state);
      state.grandTotal = setGrandTotal(state);
    },
    clearCartlist: (state) => {
      state.cartbooks = [];
    },
  }
});

export const setSelectedBooks = (state) => state.cartbooks.reduce((total, book) => {
  return Number(total + book.quantity);
}, 0);

export const setTotalPrice = (state) => state.cartbooks.reduce((total, book) => {
  return Number(total + book.price * book.quantity);
}, 0);

export const setTax = (state) => setTotalPrice(state) * state.taxRate;

export const setGrandTotal = (state) => setTotalPrice(state);

export const { addToCart, updateQuantity, removeFromCart, clearCartlist } = cartSlice.actions;
export default cartSlice.reducer;
