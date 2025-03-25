import { apiClient } from './apiClient.js'

export const getProducts = async () => {
    try {
        const response = await apiClient.get('/products');
        return response.data;        
    } catch (error) {
        console.error('Error fetching products:', error.response?.data || error.message);
        throw error;
    }
};