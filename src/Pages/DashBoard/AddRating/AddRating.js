import React from 'react';
import { useForm } from 'react-hook-form';
const AddRating = () => {
	const { register, reset, handleSubmit } = useForm();

	const onSubmit = (data) => {
		fetch('http://localhost:5000/addrating', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('Rating added succesfully');
					reset();
				}
			});
		console.log(data);
	};
	return (
		<div className='mt-5 vh-100'>
			<h1 className='fw-bold text-center mt-3'>
				Add User <span className='text-danger '>Rating</span>{' '}
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='my-5 container'>
				<input
					className='form-control mb-3'
					{...register('fullName')}
					placeholder='Full Name'
				/>
				<input
					className='form-control mb-3'
					{...register('photurl')}
					placeholder='Photo Url'
				/>
				<input
					className='form-control mb-3'
					{...register('designation')}
					placeholder='designation'
				/>
				<textarea
					className='form-control mb-3'
					{...register('description')}
					placeholder='Description'
				/>
				<input
					className='form-control mb-3'
					type='number'
					{...register('rate')}
					placeholder='Rate'
				/>
				<div className='text-center'>
					<input className='btn btn-success from-control w-50' type='submit' />
				</div>
			</form>
		</div>
	);
};

export default AddRating;
