import { Routes, Route, Navigate } from 'react-router-dom';
import { useCombinedContexts } from './../hooks/useCombineContexs.js'
import { Admin, Contact, Create, Dashboard, Detail, Edit, Home, Login, Message, Register, Shop } from '../pages/index.js';
import { ProtectedRoute } from './ProtectedRoute.jsx';

export const Router = () => {	
	const { isAuthenticated, setRedirectPath } = useCombinedContexts();
	return (
		<Routes>
			<Route path='/' element={<Home/>} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/shop' element={<Shop/>} />
			<Route path='/shop/:category/:licence_id?' element={<Shop/>} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/Detail' element={<Detail />} />
			<Route path='/admin' element={
					isAuthenticated ? (
						<Admin/>
					) :(
						<Navigate to='/login' replace state={{ from: '/admin' }} />
					)					
				}
			/>
			<Route path='/create' element={
					isAuthenticated ? (
						<Create/>
					) :(
						<Navigate to='/login' replace state={{ from: '/create' }} />
					)					
				}
			/>
			<Route path='/Edit' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Edit/> </ProtectedRoute>} />
			<Route path='/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Dashboard/> </ProtectedRoute>} />				
			<Route path='*' element={<Navigate to='/login' replace />} />
		</Routes>
	);
};