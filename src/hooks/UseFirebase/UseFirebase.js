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
	const [isLoading, setIsLoading] = useState(true);
	const [admin, setAdmin] = useState(false);

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
				//! save user to database
				saveUser(email, name, 'POST');
				//! send name to firebase after creation
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
				saveUser(user.email, user.displayName, 'PUT');
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
		setIsLoading(true);
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

	//! save user with email registration
	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch('http://localhost:5000/users', {
			method: method,
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	// ! admin verify
	useEffect(() => {
		fetch(`http://localhost:5000/users/${user.email}`)
			.then((res) => res.json())
			.then((data) => setAdmin(data.admin));
	}, [user.email]);
	return {
		googleSignin,
		user,
		admin,
		registerUser,
		authError,
		isLoading,
		loginUser,
		logOut,
	};
};
export default UseFirebase;
