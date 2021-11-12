import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Products = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('https://damp-taiga-39010.herokuapp.com/addproducts')
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
			<div className='text-center' data-aos='fade-right' data-aos-duration='2000'>
				<h1 className='pb-5 fw-bold text-decoration-underline'>
					Popular in <span className='text-warning'>Store</span>
				</h1>
			</div>
			<div className='row container-fluid mx-auto  row-cols-1  row-cols-md-4 g-4'>
				{products.map((product) => (
					<Product key={product._id} product={product}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
