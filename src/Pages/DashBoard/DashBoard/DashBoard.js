import React from 'react';
import logo from '../../../image/logo (2).png';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import AddRating from '../AddRating/AddRating';

const DashBorad = () => {
	let { path, url } = useRouteMatch();
	return (
		<div className='py-3' style={{ backgroundColor: '#fff8f5' }}>
			<div className='d-flex align-items-center'>
				<Link to='/home' className='navbar-brand' href='#'>
					<img src={logo} width='160px' alt='' />
				</Link>
				<div style={{ marginLeft: '35%' }}>
					<h2>DashBoard</h2>
				</div>
			</div>

			<div className='row container-fluid'>
				<div
					className='col-xs-12 col-sm-12 col-md-2 my-5'
					style={{ width: '200px' }}>
					<Link to={`${url}/book`} className='nav-link text-dark'>
						<span className='ms-2'>&#128722; Book</span>{' '}
					</Link>
					<Link to={`${url}/bookingList`} className='nav-link text-dark'>
						<span className='ms-2'>&#128722; Bookings</span>{' '}
					</Link>
					<Link to={`${url}/addRating`} className='nav-link text-dark'>
						<span className='ms-2'>&#43; Rating</span>{' '}
					</Link>
					<Link to={`${url}/makeAdmin`} className='nav-link text-dark'>
						<span className='ms-2'>&#128101; Make Admin</span>{' '}
					</Link>
					<Link to={`${url}/bookingLIst`} className='nav-link text-dark'>
						<span className='ms-2'>&#128221; Booking List</span>{' '}
					</Link>
				</div>
				<div
					className='col-xs-12 col-sm-12 col-md-10'
					style={{ backgroundColor: '#e9ecef' }}>
					<Switch>
						<Route exact path={`${path}/book`}></Route>
						<Route path={`${path}/addRating`}>
							<AddRating />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default DashBorad;
