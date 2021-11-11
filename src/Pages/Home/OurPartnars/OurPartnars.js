import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/pagination';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import partnerimage1 from '../../../image/partners/bosst.png';
import partnerimage2 from '../../../image/partners/energy.png';
import partnerimage3 from '../../../image/partners/hipster.png';
import partnerimage4 from '../../../image/partners/los.png';
import partnerimage5 from '../../../image/partners/ntw.png';
import partnerimage6 from '../../../image/partners/redbox.png';
import partnerimage7 from '../../../image/partners/untield.png';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
SwiperCore.use([Pagination, Autoplay]);
const OurPartnars = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			style={{
				paddingTop: '60px',
				paddingBottom: '60px',
				backgroundColor: '#edf6f9',
			}}>
			<div
				style={{
					paddingBottom: '50px',

					padding: '20px',
				}}
				className='text-center'
				data-aos='zoom-in-right'
				data-aos-duration='2000'>
				<h1 className=' fw-bold text-decoration-underline'>
					Our <span className='text-warning'>Partner's</span>
				</h1>
				<hr />
				<div>
					<Swiper
						slidesPerView={4}
						spaceBetween={30}
						loop={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						className='mySwiper py-5'>
						<SwiperSlide>
							<img src={partnerimage1} alt='slide' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={partnerimage2} alt='slide2' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={partnerimage3} alt='slide3' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={partnerimage4} alt='slide4' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={partnerimage5} alt='slide4' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={partnerimage6} alt='slide4' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={partnerimage7} alt='slide4' />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default OurPartnars;
