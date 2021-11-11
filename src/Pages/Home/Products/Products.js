import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/addproducts')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
	}, []);
	return (
		<div
			style={{
				paddingTop: '60px',
				paddingBottom: '60px',
				backgroundColor: '#edf6f9',
			}}>
			<div className='text-center'>
				<h1 className='pb-5 fw-bold text-decoration-underline'>
					Popular in <span className='text-warning'>Store</span>
				</h1>
			</div>
			<div className='row container mx-auto  row-cols-1  row-cols-md-3 g-4'>
				{products.map((product) => (
					<Product key={product._id} product={product}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
