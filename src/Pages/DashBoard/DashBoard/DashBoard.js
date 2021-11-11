import React from 'react';
import logo from '../../../image/logo (2).png';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import AddRating from '../AddRating/AddRating';
import AddProducts from '../AddProducts/AddProducts';
import MyOrders from '../MyOrders/MyOrders';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import AllOrders from '../AllOrders/AllOrders';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';

const DashBorad = () => {
	let { path, url } = useRouteMatch();
	const { user, logOut } = UseAuth();
	useDocTitle('Dashboard');
	return (
		<div className='py-3' style={{ backgroundColor: '#f1faee' }}>
			<div className='row container-fluid row-cols-xs-12 row-cols-sm-12 text-sm-start text-md-center row-cols-md-3'>
				<div className='col '>
					<Link to='/home'>
						<img src={logo} width='160px' alt='' />
					</Link>
				</div>

				<div className='col mt-3'>
					<h2>DashBoard</h2>
				</div>
				{user.email ? (
					<div className='col mt-2'>
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
					<div></div>
				)}
			</div>
			<hr />
			<div className='row container-fluid'>
				<div
					className='col-xs-12 col-sm-12 col-md-2 my-5'
					style={{ width: '200px' }}>
					<Link to={`${url}/myOrders`} className='nav-link text-dark'>
						<span className='ms-2'>&#128722; My Orders</span>{' '}
					</Link>
					<Link to={`${url}/allORders`} className='nav-link text-dark'>
						<span className='ms-2'>&#128722; All Orders</span>{' '}
					</Link>
					<Link to={`${url}/addRating`} className='nav-link text-dark'>
						<span className='ms-2'>&#43; Rating</span>{' '}
					</Link>
					<Link to={`${url}/addaddProducts`} className='nav-link text-dark'>
						<span className='ms-2'>&#43; Products</span>{' '}
					</Link>
					<Link to={`${url}/makeAdmin`} className='nav-link text-dark'>
						<span className='ms-2'>&#128101; Make Admin</span>{' '}
					</Link>
					<Link to={`${url}/bookingLIst`} className='nav-link text-dark'>
						<span className='ms-2'>&#128221; Booking List</span>{' '}
					</Link>
				</div>
				<div className='col-xs-12 col-sm-12 col-md-10'>
					<Switch>
						<Route exact path={`${path}/book`}></Route>
						<Route path={`${path}/addRating`}>
							<AddRating />
						</Route>
						<Route path={`${path}/myOrders`}>
							<MyOrders />
						</Route>
						<Route path={`${path}/allORders`}>
							<AllOrders />
						</Route>
						<Route path={`${path}/addaddProducts`}>
							<AddProducts />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default DashBorad;
