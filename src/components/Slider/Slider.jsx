import { useState } from 'react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Card } from './../index.js';
import { Icon } from './../index.js';

import './Slider.css';

export const Slider = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleProducts = products.slice(startIndex, endIndex);
     return (
        <section className="container">
            <div className="slider">
                <h2 className="slider__title">ÚLTIMOS LANZAMIENTOS</h2>
                <div className="slider__cards">
                    {visibleProducts.map((product) => (
                        <Card product={product} key={product.id}></Card>
                    ))}
                </div>
                <div className="slider__arrows">
                    <button className="pagination__link arrows__left" onClick={prevSlide}><Icon css='icon' icon={faChevronLeft} /></button>
                    <button className="pagination__link arrows__right" onClick={nextSlide}><Icon css='icon' icon={faChevronRight} /></button>
                </div>
            </div>
        </section>
    )
}