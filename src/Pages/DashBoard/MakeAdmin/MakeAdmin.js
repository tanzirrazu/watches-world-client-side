import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
const MakeAdmin = () => {
	useDocTitle('Make Admin');
	const [email, setEmail] = useState('');
	const alert = useAlert();
	const handelonBlur = (e) => {
		setEmail(e.target.value);
	};
	const handelSubmit = (e) => {
		const user = { email };
		fetch('http://localhost:5000/users/admin', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					setEmail('');
					alert.success('Admin Added Succesfully');
				}
				console.log(data);
			});
		e.preventDefault();
	};
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='vh-100 bg-white text-center py-5'>
			<form onSubmit={handelSubmit} data-aos='fade-up' data-aos-duration='2000'>
				<h1 className='fw-bold text-center mt-3 text-decoration-underline py-3'>
					Make an
					<span className='text-danger text-decoration-underline'>Admin</span>{' '}
				</h1>
				<input
					onBlur={handelonBlur}
					type='email'
					defaultValue=''
					className='from-control w-50 mb-2'
				/>
				<div>
					<button type='submit' className='btn btn-success'>
						Admin
					</button>
				</div>
			</form>
		</div>
	);
};

export default MakeAdmin;
