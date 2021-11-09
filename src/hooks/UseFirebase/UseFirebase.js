import React, { useEffect, useState } from 'react';
import initialization from '../../Pages/Login/Firebase/Firebase.init';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

initialization();
const UseFirebase = () => {
	const [user, setUser] = useState({});
	const [authError, setAuthError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	// ! Google Sign in
	const googleSignin = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;

				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			});
	};
	// ! Log Out
	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				setAuthError(error.message);
			});
	};
	//! observer user state
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, [auth]);
	return { googleSignin, user, authError, isLoading, logOut };
};
export default UseFirebase;
