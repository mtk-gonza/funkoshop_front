import { useDispatch } from 'react-redux';
import { logout } from './../../redux/slices/authSlice';
import { Button } from './../Button/Button';
import './Auth.css'

export const Auth = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        dispatch(logout());
    };
    return (
        <Button className='btn_cerrar navbar__link' onClick={handleLogout}>CERRAR SESIÓN</Button>
    );
}