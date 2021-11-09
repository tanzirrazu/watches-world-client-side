import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../image/logo (2).png';
import './Header.css';
const Header = () => {
	// const { user, logOut } = useAuth();
	return (
		<div
			style={{
				backgroundColor: '#ee9b00',
			}}>
			<nav className='navbar navbar-expand-lg navbar-light'>
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
								<Link to='/teams' className='nav-link active'>
									Our Teams
								</Link>
							</li>

							<li className='nav-item'>
								<Link to='#' className='nav-link active me-4'>
									Contact Us
								</Link>
							</li>
							<Link to='/dashboard'>
								{' '}
								<button className='btn btn-danger ms-2'>DashBoard</button>
							</Link>
						</ul>

						<div className='btn-group ms-3'>
							<div
								className='dropdown-toggle'
								data-bs-toggle='dropdown'
								style={{ cursor: 'pointer' }}
								aria-expanded='false'>
								<div>
									<img
										// src={user.photoURL}
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
											src=''
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
										{/* {user.displayName} */}
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Something else here
									</a>
								</li>
								<hr />
								<li className='dropdown-item'>
									<button className='btn btn-danger '>LogOut</button>
								</li>
							</ul>
						</div>

						<div className='d-flex'>
							<div>
								<Link to='/login'>
									{' '}
									<button className='btn btn-danger ms-2'>Login</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
