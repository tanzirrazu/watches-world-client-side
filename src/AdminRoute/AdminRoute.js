import React from 'react';

import { Redirect, Route } from 'react-router';
import UseAuth from '../hooks/UseAuth/UseAuth';
import { XlviLoader } from 'react-awesome-loaders';

const AdminRoute = ({ children, ...rest }) => {
	const { user, admin, isLoading } = UseAuth();
	if (isLoading) {
		return (
			<div className='position-absolute bottom-50 end-50'>
				<XlviLoader
					boxColors={['#EF4444', '#F59E0B', '#6366F1']}
					desktopSize={'128px'}
					mobileSize={'100px'}
				/>
			</div>
		);
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;
