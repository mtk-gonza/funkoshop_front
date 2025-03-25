import { useContext } from 'react';
import { 
    AuthContext, 
    CategoryContext, 
    LicenceContext,
    ProductContext 
} from './../context/index.jsx';

export const useCombinedContexts = () => {
    const { isAuthenticated, setIsAuthenticated, login, logout } = useContext(AuthContext);
    const { categories } = useContext(CategoryContext);
    const { licences } = useContext(LicenceContext);
    const { products } = useContext(ProductContext);

    return { 
        isAuthenticated, 
        setIsAuthenticated,
        login,
        logout,
        categories,
        licences,
        products 
    };
};