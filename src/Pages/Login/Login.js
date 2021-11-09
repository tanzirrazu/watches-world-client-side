import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import logo from '../../image/logo (2).png';
const Login = () => {
	const { googleSignin } = UseAuth();
	return (
		<div className='vh-100'>
			<div className='container py-5 h-100'>
				<div className='text-center'>
					<img src={logo} className='img-fluid' width='220px' alt='' />
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
						<div>
							<div className='form-outline mb-4'>
								<input
									type='email'
									placeholder='Enter Your Email'
									className='form-control form-control-lg'
								/>
							</div>
							<div className='form-outline mb-4'>
								<input
									type='password'
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
									onClick={googleSignin}
									style={{ backgroundColor: '#55acee' }}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										class='icon icon-tabler icon-tabler-brand-google'
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
