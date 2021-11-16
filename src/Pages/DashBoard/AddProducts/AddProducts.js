import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AddProducts = () => {
	const { register, reset, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		const formData = new FormData();
		formData.append('data', data);

		fetch('http://localhost:5000/addproducts', {
			method: 'POST',

			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('Product added succesfully');
					// reset();
				}
			});
	};
	useEffect(() => {
		AOS.init();
	}, []);
	useDocTitle('Add Products');
	return (
		<div className='py-3 bg-white' data-aos='fade-up' data-aos-duration='2000'>
			<h1 className='fw-bold text-center text-decoration-underline'>
				Add a <span className='text-danger text-decoration-underline'>Product</span>{' '}
			</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='my-5 container'
				data-aos='fade-down'
				data-aos-duration='2000'>
				<input
					className='form-control mb-3'
					ref={register('modelName')}
					required
					placeholder='Model Name'
				/>
				<input
					required
					className='form-control mb-3'
					ref={register('displaySize')}
					placeholder='Display Size'
				/>
				<input
					required
					className='form-control mb-3'
					ref={register('warranty')}
					placeholder='Warranty'
				/>

				<input
					className='form-control mb-3'
					required
					type='number'
					ref={register('price')}
					placeholder='Price'
				/>
				<input
					required
					className='form-control mb-3'
					type='text'
					ref={register('chargingTime')}
					placeholder='Charging Time'
				/>
				<input
					required
					className='form-control mb-3'
					type='text'
					ref={register('standby')}
					placeholder='Stand By'
				/>
				<input
					required
					className='form-control mb-3'
					type='text'
					ref={register('color')}
					placeholder='Color'
				/>
				<input
					required
					className='form-control mb-3'
					type='file'
					accept='img/*'
					ref={register('ImageUrl')}
					placeholder='Image Url'
				/>
				<input
					required
					className='form-control mb-3'
					type='number'
					ref={register('rate')}
					placeholder='Rate'
				/>
				<textarea
					required
					className='form-control mb-3'
					ref={register('description')}
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
