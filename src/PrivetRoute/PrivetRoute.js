import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../hooks/UseAuth/UseAuth';

const PrivetRoute = ({ children, ...rest }) => {
	const { user, isLoading } = UseAuth();
	if (isLoading) {
		return (
			<div className='d-flex justify-content-center'>
				<div className='spinner-border' role='status'>
					<span className='sr-only'>Loading...</span>
				</div>
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
