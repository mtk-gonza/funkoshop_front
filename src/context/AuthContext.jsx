import { createContext, useState, useEffect } from 'react';
import { setAuthToken, getAccessToken } from './../services/authService.js';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!getAccessToken());
    const [redirectPath, setRedirectPath] = useState(null);

    useEffect(() => {
        const token = getAccessToken();
        if (token) {
            setAuthToken(token);
        }
    }, []);

    const login = (token, path) => {
        localStorage.setItem('access_token', token);
        setAuthToken(token);
        setIsAuthenticated(true);
        if (path) {
            window.location.href = path;
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setAuthToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout, setRedirectPath }}>
            {children}
        </AuthContext.Provider>
    );
};