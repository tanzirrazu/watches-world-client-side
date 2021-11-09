import React from 'react';
import logo from '../../../../image/logo (2).png';
const Footer = () => {
	return (
		<div
			style={{
				paddingTop: '80px',
				paddingBottom: '80px',
				backgroundColor: '#ee9b00',
			}}>
			<div className='row container-fluid mx-auto row-cols-1 row-cols-md-4 g-4'>
				{/* first colomn */}
				<div className='col'>
					<div className='mb-5'>
						<div className='me-3'>
							<img src={logo} className='img-fluid' width='200px' alt='' />
						</div>
						<div className='text-white'>
							<span>
								H#000 (0th Floor), Road #00,
								<br />
								New DOHS, Mohakhali, Dhaka, Bangladesh
							</span>
						</div>
					</div>
				</div>
				{/* second colomn */}
				<div className='col'>
					<div className='mb-3'>
						<h4 className='text-white'>Company</h4>
						<div className='text-white'>
							<a className='d-block text-decoration-none text-white' href='#'>
								About
							</a>
							<a className='d-block text-decoration-none text-white' href='#'>
								Project
							</a>
							<a className='d-block text-decoration-none text-white' href='#'>
								Our Team
							</a>
							<a className='d-block text-decoration-none text-white' href='#'>
								Terms Conditons
							</a>
							<a className='d-block text-decoration-none text-white' href='#'>
								Submit Listing
							</a>
						</div>
					</div>
				</div>
				{/* third colomn */}
				<div className='col'>
					<div className='mb-3'>
						<h4 className='text-white'>Quick Links</h4>
						<div className='text-white'>
							<a className='d-block text-decoration-none text-white' href='#'>
								Quick Links
							</a>
							<a className='d-block text-decoration-none text-white' href='#'>
								Rentals
							</a>
							<a className='d-block text-decoration-none text-white' href='#'>
								Sales
							</a>
							<a className='d-block text-decoration-none text-white' href='#'>
								Contact
							</a>
							<a className='d-block text-decoration-none text-white' href='#'>
								Our blog
							</a>
						</div>
					</div>
				</div>
				{/* fourth colomn */}
				<div className='col'>
					<div className='mb-3'>
						<h4 className='text-white'>About Us</h4>
						<div>
							<span className='text-white'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
								possimus blanditiis illo tempora suscipit saepe necessitatibus nostrum
								dolorum aperiam praesentium.
							</span>
							<div className='d-flex mt-3'>
								<div className='me-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon icon-tabler icon-tabler-brand-facebook'
										width='30'
										height='30'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='#2c3e50'
										fill='white'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path stroke='none' d='M0 0h24v24H0z' fill='white' />
										<path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3' />
									</svg>
								</div>
								<div className='me-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon icon-tabler icon-tabler-brand-twitter'
										width='30'
										height='30'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='#2c3e50'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path stroke='none' d='M0 0h24v24H0z' fill='white' />
										<path d='M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z' />
									</svg>
								</div>
								<div className='me-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon icon-tabler icon-tabler-brand-instagram'
										width='30'
										height='30'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='#2c3e50'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path stroke='none' d='M0 0h24v24H0z' fill='white' />
										<rect x='4' y='4' width='16' height='16' rx='4' />
										<circle cx='12' cy='12' r='3' />
										<line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
									</svg>
								</div>
								<div className='me-3'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='icon icon-tabler icon-tabler-brand-linkedin'
										width='30'
										height='30'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='#2c3e50'
										fill='none'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path stroke='none' d='M0 0h24v24H0z' fill='white' />
										<rect x='4' y='4' width='16' height='16' rx='2' />
										<line x1='8' y1='11' x2='8' y2='16' />
										<line x1='8' y1='8' x2='8' y2='8.01' />
										<line x1='12' y1='16' x2='12' y2='11' />
										<path d='M16 16v-3a2 2 0 0 0 -4 0' />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
