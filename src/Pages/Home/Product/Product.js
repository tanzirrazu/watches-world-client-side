import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Product = (props) => {
	const { modelName, price, imageUrl, rate, standby, warranty, color } =
		props.product;
	return (
		<div className='col'>
			<div className='card'>
				<img className='img-fluid' src={imageUrl} alt='Vans' />

				<div className='card-body'>
					<h4 className='card-title'>{modelName}</h4>
					<h6 className='card-subtitle mb-2 text-warning'>
						<Rating
							fullSymbol='fas fa-star'
							emptySymbol='far fa-star'
							readonly
							initialRating={rate}></Rating>
					</h6>
					<li>
						<span>{standby} battary life</span>
					</li>
					<li>
						<span>Color: {color} </span>
					</li>
					<li>
						<span>{warranty}</span>
					</li>

					<div className='buy d-flex justify-content-between align-items-center'>
						<div className='text-success'>
							<h5 className='mt-4'>${price}</h5>
						</div>
						<Link to='#' className='btn btn-danger mt-3'>
							<i className='fas fa-shopping-cart'></i>+ to Cart
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
