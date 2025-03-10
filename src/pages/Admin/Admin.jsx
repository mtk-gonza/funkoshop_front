import {  Link } from 'react-router-dom';

export const Admin = () => {
    return (
        <main className='container'>            
            <div>Tabla ADmin</div>
            <Link className='edit__back' to='/dashboard'>Volver</Link>
        </main>
    )
}