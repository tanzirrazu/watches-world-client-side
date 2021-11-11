import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../hooks/UseAuth/UseAuth';

const PrivetRoute = ({ children, ...rest }) => {
	const { user, isLoading } = UseAuth();
	if (isLoading) {
		return (
			<div className='position-relative'>
				<Spinner
					className='position-absolute top-100 start-50 translate-middle'
					animation='grow'
					variant='danger'
				/>
			</div>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivetRoute;
