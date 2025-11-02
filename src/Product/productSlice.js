import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, editProduct, fetchProducts, viewProduct } from "./productThunk";

const productSlice = createSlice({
    name: "products",
    initialState: { products: [], product: {}, loading: false, error: null },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(addProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false
                state.products.push(action.payload)
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(viewProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(viewProduct.fulfilled, (state, action) => {
                state.loading = false
                state.product = action.payload
            })
            .addCase(viewProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(editProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                state.loading = false
                const data = action.payload
                const ind = state.products.findIndex(res => res.id === data.id);
                state.products[ind] = data
                state.product = {}
            })
            .addCase(editProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false
                state.products = state.products.filter((item) => item.id !== action.payload);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false
                state.error=action.error.message
            })

    }
})

export const { setProduct } = productSlice.actions;

export default productSlice.reducer