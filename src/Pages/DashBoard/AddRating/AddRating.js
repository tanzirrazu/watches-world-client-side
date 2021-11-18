import React, { useEffect, useState } from 'react';

import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AddRating = () => {
	const [fullName, setFullname] = useState('');
	const [rate, setRate] = useState(0);
	const [photurl, setPhotourl] = useState(null);
	const [description, setDescription] = useState('');
	const [designation, setDesignation] = useState('');

	const handelOnSubmit = (e) => {
		e.preventDefault();
		console.log(photurl);
		const formData = new FormData();
		formData.append('fullName', fullName);
		formData.append('designation', designation);
		formData.append('rate', rate);
		formData.append('photurl', photurl);
		formData.append('description', description);
		fetch('https://damp-taiga-39010.herokuapp.com/addrating', {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert('Rating added succesfully');
				}
				console.log(data);
			});
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
				onSubmit={handelOnSubmit}
				className='my-5 container'
				data-aos='fade-down'
				data-aos-duration='2000'>
				<input
					className='form-control mb-3'
					onChange={(e) => setFullname(e.target.value)}
					type='text'
					name='fullName'
					placeholder='Full Name'
				/>
				<textarea
					className='form-control mb-3'
					onChange={(e) => setDescription(e.target.value)}
					type='text'
					name='description'
					placeholder='Description'
				/>

				<input
					className='form-control mb-3'
					onChange={(e) => setDesignation(e.target.value)}
					type='text'
					name='designation'
					placeholder='Designation'
				/>

				<input
					className='form-control mb-3'
					onChange={(e) => setRate(e.target.value)}
					type='number'
					name='rate'
					placeholder='Rate'
				/>
				<input
					className='form-control mb-3'
					onChange={(e) => setPhotourl(e.target.files[0])}
					type='file'
					name='photurl'
					accept='image/*'
				/>
				<input
					className='form-control btn-success btn-sm w-25 mx-auto'
					type='submit'
				/>
			</form>
			{/* <form
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
			</form> */}
		</div>
	);
};

export default AddRating;
