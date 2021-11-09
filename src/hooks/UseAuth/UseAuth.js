import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const UseAuth = () => {
	const auth = useContext(AuthContext);
	return auth;
};

export default UseAuth;
