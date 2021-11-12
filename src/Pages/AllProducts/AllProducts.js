import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { useDocTitle } from '../../hooks/DocumentTitel/DocumentTitel';
import UseAuth from '../../hooks/UseAuth/UseAuth';

import Footer from '../Home/Shared/Footer/Footer';
import Header from '../Home/Shared/Header/Header';
import { XlviLoader } from 'react-awesome-loaders';
const AllProducts = () => {
	useDocTitle('Our Products');
	const [allProducts, setAllProducts] = useState([]);
	useEffect(() => {
		fetch('https://damp-taiga-39010.herokuapp.com/allproducts')
			.then((res) => res.json())
			.then((data) => {
				setAllProducts(data);
			});
	}, []);
	const { isLoading } = UseAuth();
	if (isLoading) {
		return (
			<div className='position-absolute bottom-50 end-50'>
				<XlviLoader
					boxColors={['#EF4444', '#F59E0B', '#6366F1']}
					desktopSize={'128px'}
					mobileSize={'100px'}
				/>
			</div>
		);
	}

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
					<h1 className='fw-bold text-decoration-underline'>
						Our <span className='text-warning'>Products</span>
					</h1>
					<h4>Home / Our Products</h4>
				</div>
				<div>
					<div className='row container-fluid mx-auto  row-cols-1 row-cols-md-4 g-4 my-5'>
						{allProducts.map((products) => (
							<div key={products._id} className='col'>
								<div className='card pt-3'>
									<img
										className='img-fluid'
										style={{ width: '200px', margin: '0 auto' }}
										src={products.imageUrl}
										alt='Vans'
									/>

									<div className='card-body'>
										<h6 className='fw-bold'>{products.modelName}</h6>
										<span className='card-subtitle mb-2 text-warning'>
											<Rating
												fullSymbol='fas fa-star'
												emptySymbol='far fa-star'
												readonly
												initialRating={products.rate}></Rating>
										</span>
										<br />
										<span>{products.standby} battary life</span>

										<br />
										<span>Color: {products.color} </span>
										<br />

										<div className='d-lg-flex justify-content-between align-items-center'>
											<div className='text-success'>
												<h6 className='mt-4'>${products.price}</h6>
											</div>
											<Link
												to={`/buynow/${products._id}`}
												className='btn btn-danger btn-sm mt-3'>
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
