import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import UseAuth from '../../hooks/UseAuth/UseAuth';
import Footer from '../Home/Shared/Footer/Footer';
import Header from '../Home/Shared/Header/Header';
import { useForm } from 'react-hook-form';
import { useAlert } from 'react-alert';
const BuyNow = () => {
	const [details, setDetails] = useState([]);
	let history = useHistory();
	const alert = useAlert();
	const { user } = UseAuth();
	const { id } = useParams();
	useEffect(() => {
		fetch(`http://localhost:5000/allproducts/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setDetails(data);
			});
	}, []);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		fetch('http://localhost:5000/orders', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert.success('Orderd added succesfully');

					history.push('/home');
				}
			});
		console.log(data);
	};
	return (
		<div>
			<Header />
			<div
				style={{
					paddingTop: '60px',
					paddingBottom: '60px',
					backgroundColor: '#edf6f9',
				}}>
				<div className='my-5 row container-fluid g-5'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='col-md-6 col-lg-6 col-12  '>
						<div className='row'>
							<div className='col-6'>
								<div>
									<label> Name</label>
									<input
										className='form-control mb-3   '
										type='text'
										{...register('name')}
										defaultValue={user.displayName}
									/>
									<label>Email</label>
									<input
										{...register('email')}
										defaultValue={user.email}
										className='form-control mb-3   '
										type='email'
									/>
									<label>Street address</label>
									<input
										{...register('streedAddress')}
										className='form-control mb-3'
										type='text'
									/>
									<label className='me-3 my-2'>Country / Region</label>
									<select type='text' {...register('countryName')}>
										<option value='Bangladesh'>Bangladesh</option>
										<option value='USA'>USA</option>
										<option value='UAE'>UAE</option>
									</select>
									<br />
									<label>Phone Number</label>
									<input
										className='form-control mb-3 '
										{...register('phone')}
										type='number'
									/>
									<label>Town / City</label>
									<input
										className='form-control mb-3 '
										{...register('city')}
										type='text'
									/>
									<label>Zip Code</label>
									<input
										className='form-control mb-3'
										{...register('zipCode')}
										type='number'
									/>
								</div>
							</div>
							<div className='col-6'>
								<label>Model Name</label>
								<input
									className='form-control mb-3'
									{...register('modelName')}
									defaultValue={details?.modelName}

									// readOnly
								/>
								<label>Price</label>
								<input
									className='form-control mb-3'
									type='number'
									defaultValue={details?.price}
									{...register('price')}

									// readOnly
								/>
								<label>Color</label>
								<input
									className='form-control mb-3'
									defaultValue={details?.color}
									type='text'
									{...register('color')}

									// readOnly
								/>
								<label>Image Url</label>
								<input
									defaultValue={details.imageUrl}
									className='form-control mb-3'
									type='text'
									{...register('imageUrl')}

									// readOnly
								/>
							</div>
						</div>
						<input
							type='submit'
							value='PlaceOrder'
							className='btn btn-outline-success form-control'
						/>
					</form>
					<div className='col-md-6 col-lg-6 col-12'>
						<div>
							<img src={details.imageUrl} width='300px' alt='' />
						</div>
						<div className='my-3'>
							<h4 className='fw-bold'>{details.modelName}</h4>
							<span className='fw-bold'>{details.displaySize}</span>
							<br />
							<span className='fw-bold'>Price: ${details.price}</span>
							<br />
							<p className='text-muted'>{details.description}</p>
							<br />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default BuyNow;
