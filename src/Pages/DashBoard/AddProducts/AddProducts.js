import React from 'react';
import { useForm } from 'react-hook-form';
const AddProducts = () => {
	const { register, reset, handleSubmit } = useForm();

	const onSubmit = (data) => {
		fetch('http://localhost:5000/addproducts', {
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
	return (
		<div className='mt-5 vh-100'>
			<h1 className='fw-bold text-center mt-3'>
				Add a <span className='text-danger '>Product</span>{' '}
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='my-5 container'>
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
