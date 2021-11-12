import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../../../hooks/UseAuth/UseAuth';
import logo from '../../../../image/logo (2).png';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
	const { user, logOut } = UseAuth();
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			style={{
				backgroundColor: '#f1faee',
			}}
			data-aos='fade-right'
			data-aos-duration='2000'
			id='header'>
			<nav
				className='navbar navbar-expand-lg navbar-light'
				style={{ zIndex: 1020, position: 'relative' }}
				id='content'>
				<div className='container'>
					<Link to='/home' className='navbar-brand' href='#'>
						<img src={logo} width='160px' alt='' />
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<Link to='/home' className='nav-link active'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/allproducts' className='nav-link active'>
									Our Products
								</Link>
							</li>

							<li className='nav-item'>
								<Link to='#' className='nav-link active me-4'>
									Contact Us
								</Link>
							</li>
						</ul>

						{user.email ? (
							<div className='btn-group'>
								<Link to='/dashboard'>
									{' '}
									<button className='btn btn-danger mt-1 me-3'>
										<i className='fas fa-th-large'></i>
									</button>
								</Link>
								<div
									className='dropdown-toggle'
									data-bs-toggle='dropdown'
									style={{ cursor: 'pointer' }}
									aria-expanded='false'>
									<div>
										<img
											className='border border-danger'
											src={user.photoURL}
											style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
											}}
											alt=''
										/>
									</div>
								</div>
								<ul className='dropdown-menu'>
									<li>
										<a className='dropdown-item text-center' href='#'>
											<img
												src={user.photoURL}
												style={{
													width: '70px',
													height: '70px',
													borderRadius: '50%',
												}}
												alt=''
											/>
											<hr />
										</a>
									</li>
									<li>
										<a className='dropdown-item' href='#'>
											{user.displayName}
										</a>
									</li>

									<hr />
									<li className='dropdown-item'>
										<button onClick={logOut} className='btn btn-danger'>
											LogOut
										</button>
									</li>
								</ul>
							</div>
						) : (
							<div className='d-flex'>
								<div>
									<Link to='/login'>
										{' '}
										<button className='btn btn-danger ms-2'>Login</button>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
