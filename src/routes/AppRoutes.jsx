import { Routes, Route, Navigate } from 'react-router-dom';
import { Admin, Contact, Create, Dashboard, Detail, Edit, Home, Login, Message, Register, Shop } from './../pages/index.js';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = ({products, licences}) => {
	return (
		<Routes>
			<Route path='/' element={<Home products={products} licences={licences}/>} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/shop' element={<Shop products={products}/>} />
			<Route path='/shop/:category/:licence_id?' element={<Shop products={products}/>} />
			<Route path='/admin' element={<ProtectedRoute> <Admin/> </ProtectedRoute>} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/Create' element={<ProtectedRoute> <Create/> </ProtectedRoute>} />
			<Route path='/Detail' element={<Detail />} />
			<Route path='/Edit'element={<ProtectedRoute> <Edit/> </ProtectedRoute>} />
			<Route path='/dashboard' element={<ProtectedRoute> <Dashboard/> </ProtectedRoute>} />				
			<Route path='*' element={<Navigate to='/login' replace />} />
		</Routes>
	);
};