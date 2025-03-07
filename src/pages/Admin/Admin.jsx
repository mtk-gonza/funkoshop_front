import {  Link } from 'react-router-dom';

import { TablesAdmin } from './../components/TablesAdmin.jsx';

export const Admin = () => {
    return (
        <main className='container'>
            <TablesAdmin/>
            <Link className='edit__back' to='/dashboard'>Volver</Link>
        </main>
    )
}