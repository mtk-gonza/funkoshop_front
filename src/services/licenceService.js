import { apiClient } from './apiClient.js'

export const getLicences = async () => {
    const response = await apiClient.get('/licences');
    return response.data;
};