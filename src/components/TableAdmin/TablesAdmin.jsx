import { useContext, useState } from 'react';

import { DataContext } from '../contexts/DataContexts.jsx';
import { DynamicTabs } from './DynamicTabs.jsx';
import { TableCategories } from './table/TableCategories.jsx';
import { TableLicences } from './table/TableLicences.jsx';
import { TableProducts } from './table/TableProducts.jsx';
import { TableRoles } from './table/TableRoles.jsx';
import { TableUsers } from './table/TableUsers.jsx';

import './TablesAdmin.css';

export const TablesAdmin = () => {
    const { products, licences, categories, users, roles } = useContext(DataContext);
    
    const tabsAdmin = [
        {
            title: 'Productos',
            content: <TableProducts products={products}></TableProducts>,
        },
        {
            title: 'Licencias',
            content: <TableLicences licences={licences}></TableLicences>,
        },
        {
            title: 'Categorias',
            content: <TableCategories categories={categories}></TableCategories>,
        },
        {
            title: 'Usuarios',
            content: <TableUsers users={users}></TableUsers>,
        },
        {
            title: 'Roles',
            content: <TableRoles roles={roles}></TableRoles>
        },
    ];
    
    return (
        <div className='container'>
            <div id='admin'>
                <h2 className='edit__title'>Tablas</h2>
                <DynamicTabs tabData={tabsAdmin}></DynamicTabs>                              
            </div>
        </div>
    )
}