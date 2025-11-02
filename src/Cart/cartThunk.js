import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../Components/constantService/axiosInstance";

export const fetchCart=createAsyncThunk("cart/fetchCart",async()=>{
    const response=await Api.get("/cart")
    return response.data
})

export const addToCart=createAsyncThunk("cart/addToCart",async(data)=>{
    const response=await Api.post("/cart",data)
    return response.data
})

export const removeFromCart=createAsyncThunk("cart/removeFromCart",async(id)=>{
    const response=await Api.delete(`/cart/${id}`)
    return response.data
})