import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './../redux/slices/authSlice';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);

    const handleLogin = async (credentials) => {
        const data = await loginAPI(credentials);
        dispatch(login({ user: data.user, token: data.token }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return { user, token, login: handleLogin, logout: handleLogout };
};