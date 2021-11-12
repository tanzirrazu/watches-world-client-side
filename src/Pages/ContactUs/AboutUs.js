import React, { useEffect } from 'react';
import image1 from '../../image/partners/about image/nextgeneration.jpg';
import image2 from '../../image/partners/about image/analog.png';
import image3 from '../../image/partners/about image/Digial.png';
import image4 from '../../image/partners/about image/kids.png';
import image5 from '../../image/partners/about image/luxury.jpg';
import image6 from '../../image/partners/about image/abo-09.png';
import image7 from '../../image/partners/about image/abo-10.png';
import image8 from '../../image/partners/about image/abo-11.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDocTitle } from '../../hooks/DocumentTitel/DocumentTitel';
import { Col, Row } from 'react-bootstrap';
import Header from '../Home/Shared/Header/Header';
import Footer from '../Home/Shared/Footer/Footer';

const AboutUs = () => {
	useDocTitle('About-Us');
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div>
			<Header />
			<div
				className='text-center py-5'
				style={{
					backgroundColor: '#f1faee',
				}}>
				<h1 className='fw-bold text-decoration-underline'>
					About <span className='text-warning'>Us</span>
				</h1>
				<h4>Home / About</h4>
				<h1>A Next Generation Watch Shop</h1>
			</div>
			<Row
				xs={1}
				md={3}
				sm={2}
				className='g-4  container mx-auto my-5'
				data-aos='fade-right'
				data-aos-duration='2000'>
				<Col>
					<div>
						<img src={image6} className='img-fluid' />
					</div>
				</Col>
				<Col>
					<div>
						<img src={image7} className='img-fluid' />
					</div>
				</Col>
				<Col>
					<div>
						<img src={image8} className='img-fluid' />
					</div>
				</Col>
			</Row>
			{/* second row */}
			<Row
				xs={1}
				md={2}
				sm={1}
				className='g-4  mx-auto my-5'
				data-aos='fade-left'
				data-aos-duration='2000'
				className='container-fluid'>
				<Col>
					<div className='my-5'>
						<img src={image1} className='img-fluid' width='600px' />
					</div>
				</Col>
				<Col>
					<div className='d-flex align-items-center my-4'>
						<img src={image2} className='img-fluid mb-4' width='120px' />
						<div className='ms-4'>
							<h4>Watches For Men</h4>
							<div>
								This is a longer card with supporting text below as a natural lead-in to
								additional content. This content is a little bit longer.
							</div>
						</div>
					</div>
					<div className='d-flex align-items-center my-3'>
						<img src={image3} className='img-fluid mb-4' width='120px' />
						<div className='ms-4'>
							<h4>Watches For Women</h4>
							<div>
								This is a longer card with supporting text below as a natural lead-in to
								additional content. This content is a little bit longer.
							</div>
						</div>
					</div>
					<div className='d-flex align-items-center my-3'>
						<img src={image4} className='img-fluid mb-4' width='120px' />
						<div className='ms-4'>
							<h4>Watches For Kids</h4>
							<div>
								This is a longer card with supporting text below as a natural lead-in to
								additional content. This content is a little bit longer.
							</div>
						</div>
					</div>
				</Col>
			</Row>
			{/* third row */}
			<Row
				xs={1}
				md={2}
				sm={1}
				className='g-4  mx-auto my-5'
				data-aos='fade-top'
				data-aos-duration='2000'
				className='container-fluid'>
				<Col>
					<div className='ms-4 my-5'>
						<h2 className='fw-bold'>Super Luxury Watches</h2>
						<p className='lead'>
							This is a longer card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.lorem20 Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam
							facilis, expedita sapiente dolores hic voluptatem obcaecati veniam maxime
							quas temporibus ex corrupti recusandae repellat repudiandae quibusdam.
							Ipsum laborum odio natus enim vitae itaque nisi cum a suscipit ad iusto
							ea earum, dolor placeat iste libero magnam ipsam officiis veniam.
						</p>
						<button className='btn btn-outline-danger'>Know More</button>
					</div>
				</Col>
				<Col>
					<div className='my-5'>
						<img src={image5} className='img-fluid' width='600px' />
					</div>
				</Col>
			</Row>
			<Footer />
		</div>
	);
};

export default AboutUs;

{
	/* */
}
