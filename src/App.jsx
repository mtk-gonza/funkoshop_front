import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { setAuthToken } from './services/authService.js';
import { login } from './redux/slices/authSlice.js';
import { fetchLicences } from './redux/slices/licenceSlice.js';
import { fetchProducts } from './redux/slices/productSlice.js';
import { fetchCategories } from './redux/slices/categorySlice.js';
import { Router } from './routes/Router.jsx';
import { Header, Footer } from './components/index.js';

export function App() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const { data: categories } = useSelector((state) => state.categories);
    const { data: licences } = useSelector(state => state.licences);
    const { data: products } = useSelector(state => state.products);
    
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            dispatch(login({ token }));
            setAuthToken(token);
        }
        dispatch(fetchCategories());
        dispatch(fetchLicences());  
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <BrowserRouter>
                <Header isAuthenticated={isAuthenticated} categories={categories}/>
                <Router licences={licences} products={products}/>
                <Footer isAuthenticated={isAuthenticated}/>                
            </BrowserRouter>
        </>
    );
};