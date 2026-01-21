import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/Product/productSlice"
import cartReducer from "../src/Cart/cartSlice"
import themeReducer from "../src/theme/themeSlice"
import searchReducer from "../src/search/searchSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        theme: themeReducer,
        search: searchReducer,
    }
})

export default store