import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLicences } from './../../services/licenceService.js';

export const fetchLicences = createAsyncThunk(
    'licences/fetchLicences',
    async () => {
        const response = await getLicences()
        return response;
    }
);

const licencesSlice = createSlice({
    name: 'licences',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLicences.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchLicences.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchLicences.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default licencesSlice.reducer;