import React, { useState } from 'react';
import { useAlert } from 'react-alert';

const MakeAdmin = () => {
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
	return (
		<div className='vh-100 bg-white text-center py-5'>
			<form onSubmit={handelSubmit}>
				<h2>Make an Admin</h2>
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
