import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination';
import 'swiper/components/navigation';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import slide1 from '../../../image/slide1.jpg';
import slide2 from '../../../image/slide2.jpg';
import slide3 from '../../../image/slide3.jpg';
import slide4 from '../../../image/slide4.jpg';
import slide5 from '../../../image/slide5.jpg';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
SwiperCore.use([Pagination, Autoplay, Navigation]);
const Banner = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div data-aos='fade-left' data-aos-duration='2000'>
			<Swiper
				// slidesPerView={3}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					'clickable': true,
				}}
				navigation={true}
				breakpoints={{
					'320': {
						'slidesPerView': 1,
					},
					'640': {
						'slidesPerView': 2,
					},
					'768': {
						'slidesPerView': 3,
					},
					'1024': {
						'slidesPerView': 3,
					},
				}}
				className='mySwiper'>
				<SwiperSlide>
					<div>
						<img src={slide1} width='520px' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img src={slide2} width='520px' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img src={slide3} width='520px' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img src={slide4} width='520px' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img src={slide5} width='520px' alt='' />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;
