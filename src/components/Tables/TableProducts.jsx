import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faPencil, faTrash, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../Icon.jsx';

import './Table.css';

export const TableProducts = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastElement = currentPage * itemsPerPage;
    const indexOfFirstElement = indexOfLastElement - itemsPerPage;
    const currentItems = products.slice(indexOfFirstElement, indexOfLastElement);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlerDelete = (id) => {
        deleteDinamic('products', id)
    }

    return (
        <div className="container">
            <table className="dark-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>SKU</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.sku}</td>
                            <td>
                                <div className="dark-table__actions">
                                    <Link to={`/edit/products/${product.id}`}>
                                        <Icon css='icon' icon={faPencil} />
                                    </Link>
                                    <button onClick={() => handlerDelete(product.id)}>
                                        <Icon css='icon' icon={faTrash} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className="pagination">
                {Array(Math.ceil(products.length / itemsPerPage))
                    .fill()
                    .map((_, index) => (
                        <li
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? 'pagination__link active' : 'pagination__link '}
                        >
                            {index + 1}
                        </li>
                    ))}
            </ul>
        </div>
    )
}