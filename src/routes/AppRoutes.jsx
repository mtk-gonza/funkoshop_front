import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './../pages/Home/Home';
import { Login } from './../pages/Login/Login';
import { Dashboard } from './../pages/Dashboard/Dashboard';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = ({products, licences}) => {
	return (
		<Routes>
			<Route path='/' element={<Home products={products} licences={licences}/>} />
			<Route path='/login' element={<Login />} />
			<Route path='/dashboard' element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>} />				
			<Route path='*' element={<Navigate to='/login' replace />} />
		</Routes>
	);
};