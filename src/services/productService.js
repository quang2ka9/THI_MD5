import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getProduct = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await axios.get(`http://localhost:8000/products`);
        return res.data;
    }
)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (data)=>{
        await axios.post('http://localhost:8000/products',data);
        const res = await axios.get("http://localhost:8000/products");
        return res.data;
    }
)

export const deleteProduct = createAsyncThunk(
    'products/deleteProducts',
    async (id) => {
        let abc = await axios.delete(`http://localhost:8000/products/${id}`);
        console.log(abc)
        return id;
    }
)

export const findProductById = createAsyncThunk(
    'products/findProducts',
    async (id) => {
        const res = await axios.get(`http://localhost:8000/products/${id}`);
        return res.data;
    }
)

export const editProduct = createAsyncThunk(
    'products/editProduct',
    async (arg, thunkAPI) => {
        await axios.put(`http://localhost:8000/products/${arg.id}`,arg)
    }
)