import React, { useEffect } from 'react';
import logo from '../../../image/logo (2).png';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import AddRating from '../AddRating/AddRating';
import AddProducts from '../AddProducts/AddProducts';
import MyOrders from '../MyOrders/MyOrders';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import AllOrders from '../AllOrders/AllOrders';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../../AdminRoute/AdminRoute';

const DashBorad = () => {
	let { path, url } = useRouteMatch();
	const { user, logOut, admin } = UseAuth();
	useDocTitle('Dashboard');
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='py-3' style={{ backgroundColor: '#f1faee' }} id='header'>
			<div
				className='row container-fluid row-cols-xs-12 row-cols-sm-12 text-sm-start text-md-center row-cols-md-3'
				id='content'>
				<div className='col ' data-aos='fade-down' data-aos-duration='2000'>
					<Link to='/home'>
						<img src={logo} width='160px' alt='' />
					</Link>
				</div>

				<div className='col mt-3' data-aos='fade-up' data-aos-duration='2000'>
					<h2>DashBoard</h2>
				</div>
				{user.email ? (
					<div className='col mt-2' data-aos='fade-left' data-aos-duration='2000'>
						<div
							className='dropdown-toggle'
							data-bs-toggle='dropdown'
							style={{ cursor: 'pointer' }}
							aria-expanded='false'>
							<div>
								<img
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
						<ul className='dropdown-menu dashboard'>
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
					<div></div>
				)}
			</div>
			<hr />
			<div className='row container-fluid'>
				<div
					className='col-xs-12 col-sm-12 col-md-2 my-5'
					style={{ width: '200px' }}
					data-aos='fade-up'
					data-aos-duration='2000'>
					<Link to={`${url}`} className='nav-link text-dark'>
						<span className='ms-2'>&#128722; My Orders</span>{' '}
					</Link>
					<Link to={`${url}/addRating`} className='nav-link text-dark'>
						<span className='ms-2'>&#43; Rating</span>{' '}
					</Link>
					{admin && (
						<div>
							<Link to={`${url}/allORders`} className='nav-link text-dark'>
								<span className='ms-2'>&#128722; All Orders</span>{' '}
							</Link>
							<Link to={`${url}/addProducts`} className='nav-link text-dark'>
								<span className='ms-2'>&#43; Products</span>{' '}
							</Link>
							<Link to={`${url}/makeAdmin`} className='nav-link text-dark'>
								<span className='ms-2'>&#128101; Make Admin</span>{' '}
							</Link>
							<Link to={`${url}/bookingLIst`} className='nav-link text-dark'>
								<span className='ms-2'>&#128221; Manage Order</span>{' '}
							</Link>
						</div>
					)}
				</div>
				<div className='col-xs-12 col-sm-12 col-md-10'>
					<Switch>
						<Route path={`${path}/addRating`}>
							<AddRating />
						</Route>
						<Route exact path={path}>
							<MyOrders />
						</Route>
						<AdminRoute path={`${path}/allORders`}>
							<AllOrders />
						</AdminRoute>
						<AdminRoute path={`${path}/makeAdmin`}>
							<MakeAdmin />
						</AdminRoute>
						<AdminRoute path={`${path}/addProducts`}>
							<AddProducts />
						</AdminRoute>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default DashBorad;
