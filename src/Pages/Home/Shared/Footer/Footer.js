import React, { useEffect } from 'react';
import logo from '../../../../image/logo (2).png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			style={{
				paddingTop: '80px',
				paddingBottom: '80px',
				backgroundColor: '#f1faee',
			}}>
			<div className='row container-fluid mx-auto row-cols-1 row-cols-md-4 g-4'>
				{/* first colomn */}
				<div className='col' data-aos='zoom-out-up' data-aos-duration='2000'>
					<div>
						<div>
							<img src={logo} className='img-fluid' width='200px' alt='' />
						</div>
						<div className='text-dark'>
							<span>
								Office: 10/3, 9th Floor, Eastern Plaza, Hatirpool
								<br />
								Dhaka – 1205 Phone:446579879846
								<br />
								E-Mail: tanzirrazu@gmail.com
							</span>
						</div>
					</div>
				</div>
				{/* second colomn */}
				<div className='col' data-aos='zoom-out-down' data-aos-duration='2000'>
					<div className='mb-3'>
						<h4 className='text-dark'>Company</h4>
						<div className='text-dark'>
							<a className='d-block text-decoration-none text-dark' href='#'>
								About
							</a>

							<a className='d-block text-decoration-none text-dark' href='#'>
								Our Products
							</a>
							<a className='d-block text-decoration-none text-dark' href='#'>
								EMI
							</a>
							<a className='d-block text-decoration-none text-dark' href='#'>
								Discount Offer
							</a>
							<a className='d-block text-decoration-none text-dark' href='#'>
								Terms Conditons
							</a>
						</div>
					</div>
				</div>
				{/* third colomn */}
				<div className='col' data-aos='zoom-out-up' data-aos-duration='2000'>
					<div className='mb-3'>
						<h4 className='text-dark'>Supports</h4>
						<div className='text-dark'>
							<a className='d-block text-decoration-none text-dark' href='#'>
								New User Guide
							</a>

							<a className='d-block text-decoration-none text-dark' href='#'>
								Return & Refund
							</a>
							<a className='d-block text-decoration-none text-dark' href='#'>
								Help Center
							</a>
							<a className='d-block text-decoration-none text-dark' href='#'>
								Warranty Policy
							</a>
							<a className='d-block text-decoration-none text-dark' href='#'>
								Frequently Asked Questions
							</a>
						</div>
					</div>
				</div>
				{/* fourth colomn */}
				<div className='col' data-aos='zoom-out-down' data-aos-duration='2000'>
					<div className='mb-3'>
						<h4 className='text-dark'>About Us</h4>
						<div>
							<span className='text-dark'>
								Watches World is the biggest Gadget importer company in Bangladesh.
								Motion View is operating in the technology arena since 2012. Introducing
								popular and new smart gadget in the country is main target.
							</span>
							<div className='d-flex mt-3'>
								<div className='me-3'>
									<button type='button' className='btn btn-danger btn-lg btn-floating'>
										<i className='fab fa-facebook-f'></i>
									</button>
								</div>
								<div className='me-3'>
									<button type='button' className='btn btn-danger btn-lg btn-floating '>
										<i className='fab fa-twitter-square'></i>
									</button>
								</div>
								<div className='me-3'>
									<button type='button' className='btn btn-danger btn-lg btn-floating'>
										<i className='fab fa-instagram'></i>
									</button>
								</div>
								<div className='me-3'>
									<button type='button' className='btn btn-danger btn-lg btn-floating'>
										<i className='fab fa-linkedin'></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
			<div className='text-center text-dark'>
				<p>Watches-World © Copyright: 2021 | Design By Tanzir Razu</p>
			</div>
		</div>
	);
};

export default Footer;
