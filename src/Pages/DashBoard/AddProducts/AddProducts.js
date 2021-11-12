import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AddProducts = () => {
	const { register, reset, handleSubmit } = useForm();

	const onSubmit = (data) => {
		fetch('https://damp-taiga-39010.herokuapp.com/addproducts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('Product added succesfully');
					reset();
				}
			});
	};
	useEffect(() => {
		AOS.init();
	}, []);
	useDocTitle('Add Products');
	return (
		<div className='py-3 bg-white' data-aos='fade-up' data-aos-duration='2000'>
			<h1 className='fw-bold text-center mt-3 text-decoration-underline'>
				Add a <span className='text-danger text-decoration-underline'>Product</span>{' '}
			</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='my-5 container'
				data-aos='fade-down'
				data-aos-duration='2000'>
				<input
					className='form-control mb-3'
					{...register('modelName')}
					placeholder='Model Name'
				/>
				<input
					className='form-control mb-3'
					{...register('displaySize')}
					placeholder='Display Size'
				/>
				<input
					className='form-control mb-3'
					{...register('warranty')}
					placeholder='Warranty'
				/>

				<input
					className='form-control mb-3'
					type='number'
					{...register('price')}
					placeholder='Price'
				/>
				<input
					className='form-control mb-3'
					type='text'
					{...register('chargingTime')}
					placeholder='Charging Time'
				/>
				<input
					className='form-control mb-3'
					type='text'
					{...register('standby')}
					placeholder='Stand By'
				/>
				<input
					className='form-control mb-3'
					type='text'
					{...register('color')}
					placeholder='Color'
				/>
				<input
					className='form-control mb-3'
					type='text'
					{...register('imageUrl')}
					placeholder='Image Url'
				/>
				<input
					className='form-control mb-3'
					type='number'
					{...register('rate')}
					placeholder='Rate'
				/>
				<textarea
					className='form-control mb-3'
					{...register('description')}
					placeholder='Description'
				/>
				<div className='text-center'>
					<input className='btn btn-success from-control w-50' type='submit' />
				</div>
			</form>
		</div>
	);
};

export default AddProducts;
