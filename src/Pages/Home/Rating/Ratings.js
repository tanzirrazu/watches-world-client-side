import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination';
import 'swiper/components/effect-coverflow';
import 'swiper/components/navigation';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from 'swiper/core';
import Rating from 'react-rating';
SwiperCore.use([Pagination, Autoplay, EffectCoverflow]);
const Ratings = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch('https://damp-taiga-39010.herokuapp.com/addrating')
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setReviews(data);
			});
	}, []);
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			style={{
				marginTop: '60px',
				marginBottom: '60px',
			}}
			data-aos='zoom-in-up'
			data-aos-duration='2000'>
			<div className='text-center'>
				<h1 className='fw-bold mb-5 text-decoration-underline'>
					Our <i className='far fa-smile text-warning'></i> Customer's
				</h1>
			</div>

			<div className='container-fluid'>
				<Swiper
					effect={'coverflow'}
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						'rotate': 50,
						'stretch': 0,
						'depth': 100,
						'modifier': 1,
						'slideShadows': true,
					}}
					slidesPerView={'auto'}
					spaceBetween={30}
					pagination={{
						'clickable': true,
					}}
					loop={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					pagination={{
						'clickable': true,
					}}
					breakpoints={{
						'320': {
							'slidesPerView': 1,
							'spaceBetween': 20,
						},
						'640': {
							'slidesPerView': 1,
							'spaceBetween': 20,
						},
						'768': {
							'slidesPerView': 2,
							'spaceBetween': 40,
						},
						'1024': {
							'slidesPerView': 3,
							'spaceBetween': 50,
						},
					}}
					className='mySwiper'>
					{reviews.map((review) => (
						<div key={review?._id} review={review} className='mt-5'>
							<SwiperSlide className='my-5'>
								<div className='p-5 shadow-lg' style={{ height: '350px' }}>
									<div
										className='d-flex'
										data-aos='zoom-in-left'
										data-aos-duration='2000'>
										<img style={{ width: '70px' }} src={review.photurl} alt=''></img>
										<div className='ms-3 mt-1'>
											<h4 className='fw-bold'>{review.fullName}</h4>
											<div>
												<h5 className='text-warning'>
													<Rating
														fullSymbol='fas fa-star'
														emptySymbol='far fa-star'
														readonly
														initialRating={review.rate}></Rating>
												</h5>
											</div>
										</div>
									</div>
									<div className='mt-3 text-secondary'>
										<p>{review.description}</p>
										<div>
											<a className='btn   me-3' href='#!' role='button'>
												<i className='fab fa-facebook-f'></i>
											</a>
											<a className='btn   me-3' href='#!' role='button'>
												<i className='fab fa-linkedin-in'></i>
											</a>
											<a className='btn  ' href='#!' role='button'>
												<i className='fab fa-twitter'></i>
											</a>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</div>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Ratings;
