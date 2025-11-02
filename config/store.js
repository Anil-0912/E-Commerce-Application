import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/Product/productSlice"
import cartReducer from "../src/Cart/cartSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    }
})

export default store