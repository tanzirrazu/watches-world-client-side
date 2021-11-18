import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import { AiFillDelete } from 'react-icons/ai';
const ManageProducts = () => {
	useDocTitle('Manage Product');
	const danger = <AiFillDelete />;
	const [allProducts, setAllProducts] = useState([]);
	const [control, setControl] = useState(false);
	useEffect(() => {
		fetch('https://damp-taiga-39010.herokuapp.com/allproducts')
			.then((res) => res.json())
			.then((data) => {
				setAllProducts(data);
			});
	}, [control]);
	const handelDelete = (id) => {
		fetch(`https://damp-taiga-39010.herokuapp.com/allproducts/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					alert('Deleted Succesfully');
					setControl(!control);
				}
			});
	};
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='vh-100 bg-white' data-aos='fade-up' data-aos-duration='2000'>
			<div>
				<h1 className='fw-bold text-center mt-3 text-decoration-underline py-3'>
					Manage
					<span className='text-danger text-decoration-underline'>
						Products
					</span>{' '}
				</h1>
				<div>
					<div className='row container mx-auto  row-cols-1  row-cols-md-4 g-4'>
						{allProducts.map((products) => (
							<div key={products._id} className='col'>
								<div className='card pt-3'>
									<img
										className='img-fluid'
										style={{ width: '150px', margin: '0 auto' }}
										src={`data:image/png;base64,${products.imageUrl}`}
										alt='Vans'
									/>
									<div className='card-body'>
										<span className='fw-bold'>{products.modelName}</span>
										<br />
										<span>{products.standby} battary life</span>
										<br />
										<span>Color: {products.color} </span>
										<br />
										<div className='d-lg-flex justify-content-between align-items-center'>
											<div className='text-success'>
												<span className='mt-4'>${products.price}</span>
											</div>
										</div>
									</div>
									<button
										className='btn btn-danger d-flex  justify-content-center'
										onClick={() => handelDelete(products._id)}>
										{' '}
										<h6>{danger}</h6> Delete Products
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageProducts;
