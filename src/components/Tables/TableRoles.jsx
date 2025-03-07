import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faPencil, faTrash, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../Icon.jsx';

import './Table.css';

export const TableRoles = ({roles}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastElement = currentPage * itemsPerPage;
    const indexOfFirstElement = indexOfLastElement - itemsPerPage;
    const currentItems = roles.slice(indexOfFirstElement, indexOfLastElement);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlerDelete = (id) => {
        deleteDinamic('licences', id)
    }
    return (
        <div className="container">
            <table className="dark-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>                                               
                        <th>Acciones</th>                        
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((role) => (
                        <tr key={role.id}>
                            <td>{role.id}</td>
                            <td>{role.name}</td>                                                        
                            <td>
                                <div className="dark-table__actions">
                                    <Link to={`/edit/roles/${role.id}`}>
                                        <Icon css='icon' icon={faPencil} />
                                    </Link>
                                    <button onClick={() => handlerDelete(role.id)}>
                                        <Icon css='icon' icon={faTrash} />
                                    </button>
                                </div>
                            </td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className="pagination">
                {Array(Math.ceil(roles.length / itemsPerPage))
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