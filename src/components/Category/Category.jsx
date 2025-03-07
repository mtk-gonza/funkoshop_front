import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCategories } from './../../services/categoryService.js';
import { Table } from './../Table/Table.jsx';
import './Category.css';

export const Category = () => {
    const [categories, setCategories] = useState([]);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await getCategories(token);                
                setCategories(response);
            } catch (error) {
                console.error('Error al cargar el inventario:', error);
            }
        };
        fetchInventory();
    }, [token]);

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nombre' },
        { key: 'parent', label: 'Categoría Padre' },
        { key: 'created_at', label: 'Fecha de Creación' }
    ];

    const handleEdit = (item) => {
        console.log("Editar", item);
        // Lógica para abrir modal/formulario de edición
    };

    const handleDelete = (item) => {
        console.log("Eliminar", item);
        // Lógica para eliminar (confirmación, llamada a la API, etc.)
    };

    return (
        <Table title='Categorias' data={categories} columns={columns} onEdit={handleEdit} onDelete={handleDelete}/>
    );
};