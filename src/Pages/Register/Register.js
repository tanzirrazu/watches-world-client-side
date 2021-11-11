import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import logo from '../../image/logo (2).png';
const Register = () => {
	const [loginData, setLoginData] = useState({});
	const history = useHistory();
	const { user, registerUser, isLoading, authError } = UseAuth();
	// !  input handel
	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		console.log(newLoginData);
		setLoginData(newLoginData);
	};
	// ! form handel
	const handleLoginSubmit = (e) => {
		if (loginData.password !== loginData.password2) {
			alert('Your password did not match');
			return;
		}
		registerUser(loginData.email, loginData.password, loginData.name, history);
		e.preventDefault();
	};
	return (
		<div className='vh-100'>
			<div className='container py-5 h-100'>
				<div className='text-center'>
					<Link to='/home'>
						<img src={logo} className='img-fluid' width='220px' alt='' />
					</Link>
				</div>
				<hr />
				<div className='row d-flex align-items-center justify-content-center h-100'>
					<div className='col-md-8 col-lg-7 col-xl-6'>
						<img
							src='https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
							className='img-fluid'
							alt='Phone image'
						/>
					</div>
					<div className='col-md-7 col-lg-5 col-xl-5 offset-xl-1'>
						<form onSubmit={handleLoginSubmit}>
							<div className='form-outline mb-4'>
								<input
									onBlur={handleOnBlur}
									type='text'
									placeholder='Enter Your Name'
									name='name'
									className='form-control form-control-lg'
								/>
							</div>
							<div className='form-outline mb-4'>
								<input
									onBlur={handleOnBlur}
									type='email'
									name='email'
									placeholder='Enter Your Email'
									className='form-control form-control-lg'
								/>
							</div>
							<div className='form-outline mb-4'>
								<input
									onBlur={handleOnBlur}
									type='password'
									name='password'
									placeholder='Password'
									className='form-control form-control-lg'
								/>
							</div>
							<div className='form-outline mb-4'>
								<input
									onBlur={handleOnBlur}
									type='password'
									placeholder='Confirm Password'
									name='password2'
									className='form-control form-control-lg'
								/>
							</div>
							{isLoading && (
								<div className='d-flex justify-content-center'>
									<div className='spinner-border' role='status'>
										<span className='sr-only'>Loading...</span>
									</div>
								</div>
							)}
							{/* {user?.email && window.alert('	User Created successfully')} */}
							{authError && (
								<div className='alert alert-danger' role='alert'>
									{authError}
								</div>
							)}
							<div className='text-center'>
								<button type='submit' className='btn btn-primary form-control'>
									Create a Acoount
								</button>
								<div className='my-3'>
									<Link to='/login'>
										<span>Already Have a Account? Please Sign in!</span>
									</Link>
								</div>
								<p className='text-center fw-bold my-3 text-secondary'>OR</p>
							</div>
							<div className='text-center'>
								<div
									className='btn btn-primary btn-lg'
									style={{ backgroundColor: '#55acee' }}
									href='#'
									role='button'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon icon-tabler icon-tabler-brand-google'
										width='56'
										height='56'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='#2c3e50'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path stroke='none' d='M0 0h24v24H0z' fill='none' />
										<path d='M17.788 5.108a9 9 0 1 0 3.212 6.892h-8' />
									</svg>
									<span> Continue with Google</span>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
