import { useParams, Link } from 'react-router-dom';

import { EditCategory } from './../components/edit/EditCategory.jsx';
import { EditLicence } from './../components/edit/EditLicence.jsx';
import { EditProduct } from './../components/edit/EditProduct.jsx';
import { EditRole } from './../components/edit/EditRole.jsx';
import { EditUser } from './../components/edit/EditUser.jsx';

export const Edit = () => {
    const { table } = useParams();
    const Item = () => {
        switch (table) {
            case 'categories':
                return <EditCategory/>;            
            case 'licences':
                return <EditLicence/>; 
            case 'products':
                return <EditProduct/>;
            case 'roles':
                return <EditRole/>;
            case 'users':
                return <EditUser/>;
            default:
                return <div className='container'>No se encontró un componente para {table}</div>;
        }
    };
    return (
        <div className="container">  
            <Item>            
            </Item>  
            <Link to='/dashboard/admin' className='edit__back'>Volver</Link>                      
        </div>
    )
}