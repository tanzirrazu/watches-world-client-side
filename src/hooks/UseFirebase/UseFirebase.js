import React, { useEffect, useState } from 'react';
import initialization from '../../Pages/Login/Firebase/Firebase.init';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
} from 'firebase/auth';

initialization();
const UseFirebase = () => {
	const [user, setUser] = useState({});
	const [authError, setAuthError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	// ! register user with email , name and password
	const registerUser = (email, password, name, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setAuthError('');
				const newUser = { email, displayName: name };
				setUser(newUser);
				// save user to database

				// send name to firebase after creation
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});
				history.replace('/');
			})
			.catch((error) => {
				setAuthError(error.message);
				console.log(error);
			})
			.finally(() => setIsLoading(false));
	};
	// ! login user with email and password
	const loginUser = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};
	// ! Google Sign in
	const googleSignin = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				const destination = location?.state?.from || '/';
				history.replace(destination);

				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};
	// ! Log Out
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
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
	return {
		googleSignin,
		user,
		registerUser,
		authError,
		isLoading,
		loginUser,
		logOut,
	};
};
export default UseFirebase;
