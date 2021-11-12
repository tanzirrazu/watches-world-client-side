import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = (props) => {
	useEffect(() => {
		AOS.init();
	}, []);
	const { modelName, price, imageUrl, rate, standby, color, _id } =
		props.product;

	return (
		<div className='col' data-aos='fade-up' data-aos-duration='2000'>
			<div className='card pt-3' data-aos='fade-down' data-aos-duration='2000'>
				<img
					className='img-fluid'
					src={imageUrl}
					style={{ width: '200px', margin: '0 auto' }}
					alt='Vans'
				/>

				<div className='card-body' data-aos='fade-up' data-aos-duration='2000'>
					<h6 className='fw-bold'>{modelName}</h6>
					<span className='card-subtitle mb-2 text-warning'>
						<Rating
							fullSymbol='fas fa-star'
							emptySymbol='far fa-star'
							readonly
							initialRating={rate}></Rating>
					</span>
					<br />
					<span>{standby} battary life</span>
					<br />
					<span>Color: {color} </span>
					<br />
					<div className='d-lg-flex justify-content-between align-items-center'>
						<div className='text-success'>
							<h5 className='mt-4'>${price}</h5>
						</div>
						<Link to={`/buynow/${_id}`} className='btn btn-danger btn-sm mt-3'>
							<i className='fas fa-shopping-cart'></i> Buy Now
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
