import React, { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AllOrders = () => {
	const [control, setControl] = useState(false);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/allOrders`)
			.then((res) => res.json())
			.then((data) => {
				setOrders(data);
			});
	}, [control]);

	const handelDelete = (id) => {
		fetch(`http://localhost:5000/allOrders/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					alert('Deleted Succesfully');
					setControl(!control);
				}
			});
	};
	useEffect(() => {
		AOS.init();
	}, []);
	useDocTitle('All Orders');
	return (
		<div
			className='vh-100  bg-white'
			style={{
				marginTop: '60px',
				marginBottom: '60px',
			}}>
			<h1 className='fw-bold text-center mt-3 text-decoration-underline py-3'>
				Manage
				<span className='text-danger text-decoration-underline'>Orders</span>{' '}
			</h1>
			<Table striped bordered hover>
				<thead data-aos='fade-left' data-aos-duration='2000'>
					<tr>
						<th>#</th>
						<th>Email</th>
						<th>Product Name</th>
						<th>Image</th>
						<th>Product id</th>
						<th>Action</th>
					</tr>
				</thead>
				{orders?.map((order, index) => (
					<tbody key={order._id}>
						<tr data-aos='fade-left' data-aos-duration='2000'>
							<td>{index}</td>
							<td>{order?.email}</td>
							<td>{order.modelName}</td>
							<td>
								<img src={order.imageUrl} alt='img' width='50px'></img>{' '}
							</td>
							<td>{order._id}</td>
							<td>
								<button
									onClick={() => handelDelete(order._id)}
									className='btn btn-danger'>
									<i className='fas fa-trash-alt'></i>
								</button>
							</td>
						</tr>
					</tbody>
				))}
			</Table>
		</div>
	);
};

export default AllOrders;
