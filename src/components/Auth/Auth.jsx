import { Button } from './../Button/Button';
import { useCombinedContexts } from './../../hooks/useCombineContexs.js';
import './Auth.css'

export const Auth = () => {
    const { logout } = useCombinedContexts()

    return (
        <Button className='btn_cerrar navbar__link' onClick={logout}>CERRAR SESIÓN</Button>
    );
}