import { apiClient } from './apiClient.js'

export const getCategories = async () => {
    const response = await apiClient.get('/categories');
    return response.data;
};