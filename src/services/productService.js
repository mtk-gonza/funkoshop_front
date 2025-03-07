import { apiClient } from './apiClient.js'

export const getproducts = async () => {
    const response = await apiClient.get('/products');
    return response.data;
};