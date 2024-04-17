import { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import Logo from '../assets/pokepedia.png'
import { logoOut } from '../usersfile/AuthService';

export const Navigation = () => {
	const { onInputChange, valueSearch, onResetForm } =
		useContext(PokemonContext);

	const navigate = useNavigate();
	const [isLogged, setIsLogged] = useState(false);

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};
	const  onLoad = async () =>{
		const user = JSON.parse(localStorage.getItem('actualUser') ?? "{}");
			if(user?.username){
				setIsLogged(true);
			}else{
				navigate("login")}
	}

	useEffect(() => {
		onLoad()
	},[onResetForm])

	return (
		<>
			<header className='container'>
				<Link to={isLogged?'/':"register"} className='logo'>
					<img
						src= {Logo}
						alt='Logo  Pokepedia'
					/>
				</Link>
				{isLogged&&(
				<div>
					<form onSubmit={onSearchSubmit}>
					<div className='form-group'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='icon-search'
						>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
						</svg>
						<input
							type='search'
							name='valueSearch'
							id=''
							value={valueSearch}
							onChange={onInputChange}
							placeholder='Buscar nombre de pokemon'
						/>
					</div>
					<button className='btn-search'>Buscar</button>
					<button className='btn-registrer' onClick={() =>{
					setIsLogged(false);
					logoOut();
					navigate('login', {replace: true})}}>Cerrar Sesion</button>
				</form>
				</div>)}
				{!isLogged&&(
				<div>
					<button className='btn-sesion' onClick={() => navigate('login', {replace: true})}>Inciar sesion</button>
					<button className='btn-registrer' onClick={() => navigate('register', {replace: true})}>Registrarse</button>
				</div>)}
			</header>
			<Outlet />
		</>
	);
};
