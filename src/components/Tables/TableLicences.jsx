import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faPencil, faTrash, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Icon } from './../Icon.jsx';

import './Table.css';

export const TableLicences = ({licences}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastElement = currentPage * itemsPerPage;
    const indexOfFirstElement = indexOfLastElement - itemsPerPage;
    const currentItems = licences.slice(indexOfFirstElement, indexOfLastElement);

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
                        <th>Description</th>                       
                        <th>Acciones</th>                        
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((licence) => (
                        <tr key={licence.id}>
                            <td>{licence.id}</td>
                            <td>{licence.name}</td>
                            <td>{licence.description}</td>                            
                            <td>
                                <div className="dark-table__actions">
                                    <Link to={`/edit/licences/${licence.id}`}>
                                        <Icon css='icon' icon={faPencil} />
                                    </Link>
                                    <button onClick={() => handlerDelete(licence.id)}>
                                        <Icon css='icon' icon={faTrash} />
                                    </button>
                                </div>
                            </td>                            
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className="pagination">
                {Array(Math.ceil(licences.length / itemsPerPage))
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