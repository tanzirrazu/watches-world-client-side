import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDocTitle } from '../../hooks/DocumentTitel/DocumentTitel';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import logo from '../../image/logo (2).png';

const Login = () => {
	const { googleSignin, loginUser, isLoading, authError, user } = UseAuth();
	const [loginData, setLoginData] = useState({});
	const location = useLocation();
	const history = useHistory();

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};
	const handleLoginSubmit = (e) => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
	};

	const handleGoogleSignIn = () => {
		googleSignin(location, history);
	};
	useDocTitle('Login');
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
									onChange={handleOnChange}
									type='email'
									name='email'
									placeholder='Enter Your Email'
									className='form-control form-control-lg'
								/>
							</div>
							<div className='form-outline mb-4'>
								<input
									onChange={handleOnChange}
									type='password'
									name='password'
									placeholder='Password'
									className='form-control form-control-lg'
								/>
							</div>
							<div className='text-center'>
								<button type='submit' className='btn btn-primary form-control'>
									Sign In
								</button>
								<div className='my-3'>
									<Link to='/register'>
										<span>New user? Please Create a Account!</span>
									</Link>
								</div>
								<p className='text-center fw-bold my-3 text-secondary'>OR</p>
							</div>
							<div className='text-center'>
								<button
									className='btn btn-primary btn-lg'
									onClick={handleGoogleSignIn}
									style={{ backgroundColor: '#55acee' }}>
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
								</button>
							</div>
						</form>
						{isLoading && (
							<div className='d-flex justify-content-center'>
								<div className='spinner-border' role='status'>
									<span className='sr-only'>Loading...</span>
								</div>
							</div>
						)}
						{/* {user.email && <Alert  variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        
      </Alert> } */}
						{authError && (
							<div className='alert alert-danger' role='alert'>
								{authError}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
