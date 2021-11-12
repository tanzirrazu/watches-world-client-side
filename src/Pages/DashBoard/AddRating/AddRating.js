import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AddRating = () => {
	const { register, reset, handleSubmit } = useForm();

	const onSubmit = (data) => {
		fetch('https://damp-taiga-39010.herokuapp.com/addrating', {
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
	useEffect(() => {
		AOS.init();
	}, []);
	useDocTitle('Add Rating');
	return (
		<div className='py-5 vh-100 bg-white'>
			<h1
				className='fw-bold text-center mt-3'
				data-aos='fade-down'
				data-aos-duration='2000'>
				Add User <span className='text-danger '>Rating</span>{' '}
			</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='my-5 container'
				data-aos='fade-down'
				data-aos-duration='2000'>
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
