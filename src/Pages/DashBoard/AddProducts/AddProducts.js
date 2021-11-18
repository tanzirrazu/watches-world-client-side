import React, { useEffect, useState } from 'react';

import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AddProducts = () => {
	// const { register, reset, handleSubmit } = useForm();
	const [modelName, setModelName] = useState('');
	const [price, setPrice] = useState(0);
	const [rate, setRate] = useState(0);
	const [imgUrl, setImgUrl] = useState(null);
	const [color, setColor] = useState('');
	const [standby, setStandBy] = useState('');
	const [description, setDescription] = useState('');

	// console.log(modelName, price, rate, imgUrl, color, standby, description);
	const handelOnSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('modelName', modelName);
		formData.append('price', price);
		formData.append('rate', rate);
		formData.append('imgUrl', imgUrl);
		formData.append('color', color);
		formData.append('standby', standby);
		formData.append('description', description);
		fetch('http://localhost:5000/addproducts', {
			method: 'POST',
			// headers: {
			// 	'content-type': 'application/json',
			// },
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					alert('Product added succesfully');
				}
			});
	};
	// https://damp-taiga-39010.herokuapp.com/
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
				onSubmit={handelOnSubmit}
				className='my-5 container'
				data-aos='fade-down'
				data-aos-duration='2000'>
				<input
					className='form-control mb-3'
					onChange={(e) => setModelName(e.target.value)}
					type='text'
					name='modelName'
					placeholder='Product Model'
				/>
				<input
					className='form-control mb-3'
					onChange={(e) => setColor(e.target.value)}
					type='text'
					name='color'
					placeholder='Color'
				/>
				<input
					className='form-control mb-3'
					onChange={(e) => setStandBy(e.target.value)}
					type='text'
					name='standby'
					placeholder='StandBy'
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
					onChange={(e) => setPrice(e.target.value)}
					type='number'
					name='price'
					placeholder='Price'
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
					onChange={(e) => setImgUrl(e.target.files[0])}
					type='file'
					name='imageUrl'
					accept='image/*'
					placeholder='Rate'
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
					type='file'
					accept='image/*'
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
					<input onBlur={handelOnChange} className='btn btn-success from-control w-50' type='submit' />
				</div>
			</form> */}
		</div>
	);
};

export default AddProducts;
