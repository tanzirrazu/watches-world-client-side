import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo (2).png';
const Register = () => {
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
						<form>
							<div className='form-outline mb-4'>
								<input
									type='text'
									placeholder='Enter Your Name'
									className='form-control form-control-lg'
								/>
							</div>
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
							<div className='form-outline mb-4'>
								<input
									type='password'
									placeholder='Confirm Password'
									className='form-control form-control-lg'
								/>
							</div>
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
