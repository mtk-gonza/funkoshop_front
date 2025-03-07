import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const mySwal = withReactContent(Swal);
import { login } from './../../redux/slices/authSlice.js';
import { loginAPI, setAuthToken } from './../../services/authService.js';
import './Login.css';

export const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const { access_token } = await loginAPI(credentials);
            dispatch(login({ token: access_token }));
            setAuthToken(access_token);
            localStorage.setItem('access_token', access_token);
            setLoading(false);
            navigate('/dashboard');
        } catch (err) {
            console.error('Error en el inicio de sesión:', err);
            setError(`Error en el inicio de sesión:', ${err}`)
            alert(error);
        }
    };
    useEffect(()=>{
        if (isAuthenticated) {
            navigate('/dashboard')  
        }        
    })

    return (
        <main id="login" className="container">
            <div className="login__header">
                <h2 className="login__title">INGRESAR A MI CUENTA</h2>
                <p className="login__subtitle">Para obtener novedades</p>
            </div>
            <form className="login__form" action="" method="post" onSubmit={handleLogin}>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="username">Usuario:</label>
                    <input 
                        className="form__input" 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="johndoe" 
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    />
                </div>
                <div className="form__box--grid">
                    <label className="form__label" htmlFor="password">Contraseña:</label>
                    <input 
                        className="form__input" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" 
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    />
                </div>
                <div className="form__submission">
                    <input className="form__btn btn btn--primary btn--large" type="submit" value={loading ? 'Ingresando...' : 'Ingresar'} onClick={() => { }}/>
                    <div className="form__remember">
                        <input type="checkbox" name="remember" id="" />
                        <label htmlFor="">Recordarme</label>
                    </div>
                </div>
                <a className="form__link" href="">Olvidé mi contraseña</a>
            </form>
        </main>
    );
};