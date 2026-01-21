import axios from "axios";
import { setProduct } from "../../Product/productSlice";

export const Api=axios.create({
    baseURL:"http://localhost:2000"
}) 

