import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getproducts } from '../../services/productService.js';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await getproducts()        
        return response;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;