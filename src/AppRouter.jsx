import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, LoginPage, PokemonPage, SearchPage, UserPage } from './pages';


export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='pokemon/:id' element={<PokemonPage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path="/register" element={<UserPage/>} />
			</Route>
		</Routes>
	);
};
