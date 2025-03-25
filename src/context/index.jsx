import { AuthProvider } from './AuthContext.jsx';
import { LicenceProvider } from './LicenceContext.jsx';
import { CategoryProvider } from './CategoryContext.jsx';
import { ProductProvider } from './ProductContext.jsx';

export {  AuthContext } from './AuthContext.jsx';
export {  LicenceContext } from './LicenceContext.jsx';
export {  CategoryContext } from './CategoryContext.jsx';
export {  ProductContext } from './ProductContext.jsx';

const combineProviders = (...providers) => {
    return ({ children }) =>        
        providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);
};

export const Providers = combineProviders(AuthProvider, LicenceProvider, ProductProvider, CategoryProvider);