import { apiClient } from './apiClient.js'

export const loginAPI = async (credentials) => {
  try {
    const response = await apiClient.post(`/auth/token`, credentials);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Error en el inicio de sesión: ${error.response.data.message || 'Credenciales incorrectas'}`);
    } else if (error.request) {
      throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
    } else {
      throw new Error(`Error inesperado: ${error.message}`);
    }
  }
};

export const setAuthToken = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};