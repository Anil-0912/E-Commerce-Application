import { createSlice } from "@reduxjs/toolkit";
import { addToCart, fetchCart, removeFromCart } from "./cartThunk";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      });
  },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
