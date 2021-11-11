import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Banner from '../Home/Banner/Banner';
import Ratings from '../Home/Rating/Ratings';
import Footer from '../Home/Shared/Footer/Footer';
import Header from '../Home/Shared/Header/Header';

const AllProducts = () => {
	const [allProducts, setAllProducts] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/allproducts')
			.then((res) => res.json())
			.then((data) => {
				setAllProducts(data);
			});
	}, []);
	return (
		<div>
			<Header />

			<div
				style={{
					paddingTop: '60px',
					paddingBottom: '60px',
					backgroundColor: '#edf6f9',
				}}>
				<div className='text-center'>
					<h1 className='pb-5 fw-bold text-decoration-underline'>
						Our <span className='text-warning'>Products</span>
					</h1>
				</div>
				<div>
					<div className='row container mx-auto  row-cols-1  row-cols-md-3 g-4'>
						{allProducts.map((products) => (
							<div key={products._id} className='col'>
								<div className='card'>
									<img className='img-fluid' src={products.imageUrl} alt='Vans' />

									<div className='card-body'>
										<h4 className='card-title'>{products.modelName}</h4>
										<h6 className='card-subtitle mb-2 text-warning'>
											<Rating
												fullSymbol='fas fa-star'
												emptySymbol='far fa-star'
												readonly
												initialRating={products.rate}></Rating>
										</h6>
										<li>
											<span>{products.standby} battary life</span>
										</li>
										<li>
											<span>Color: {products.color} </span>
										</li>
										<li>
											<span>{products.warranty}</span>
										</li>

										<div className='buy d-flex justify-content-between align-items-center'>
											<div className='text-success'>
												<h5 className='mt-4'>${products.price}</h5>
											</div>
											<Link to={`/buynow/${products._id}`} className='btn btn-danger mt-3'>
												<i className='fas fa-shopping-cart'></i> Buy Now
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default AllProducts;
