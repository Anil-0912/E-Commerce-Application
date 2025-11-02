import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../Components/constantService/axiosInstance";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await Api.get("/products")
    return response.data
})

export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
    const response = await Api.post("/products", product)
    return response.data
})

export const viewProduct = createAsyncThunk("products/viewProduct", async (id) => {
    const response = await Api.get(`/products/${id}`)
    return response.data
})

export const editProduct = createAsyncThunk("products/editProduct", async (product) => {
    const response = await Api.put(`/products/${product.id}`, product)
    return response.data
}) 

export const deleteProduct=createAsyncThunk("products/deleteProduct",async(id)=>{
    const response=await Api.delete(`/products/${id}`)
    console.log(response);  
})