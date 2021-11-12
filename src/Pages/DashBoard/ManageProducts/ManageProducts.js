import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [control, setControl] = useState(false);
	useEffect(() => {
		fetch('http://localhost:5000/allproducts')
			.then((res) => res.json())
			.then((data) => {
				setAllProducts(data);
			});
	}, [control]);
	const handelDelete = (id) => {
		fetch(`http://localhost:5000/allproducts/${id}`, {
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
	return (
		<div className='vh-100 bg-white'>
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
										src={products.imageUrl}
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
										className='btn btn-danger'
										onClick={() => handelDelete(products._id)}>
										{' '}
										<i className='fas fa-trash-alt me-3'></i>Delete Products
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
