import React, { useEffect, useState } from 'react';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillDelete } from 'react-icons/ai';
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdPaid } from 'react-icons/md';
const AllOrders = () => {
	const [control, setControl] = useState(false);
	const [orders, setOrders] = useState([]);
	const [status, setStatus] = useState('');
	const danger = <AiFillDelete />;
	const update = <GrDocumentUpdate />;
	const paid = <MdPaid />;

	useEffect(() => {
		fetch(`https://damp-taiga-39010.herokuapp.com/allOrders`)
			.then((res) => res.json())
			.then((data) => {
				setOrders(data);
			});
	}, [control]);

	const handelDelete = (id) => {
		fetch(`https://damp-taiga-39010.herokuapp.com/allOrders/${id}`, {
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
	const updateStatus = (e) => {
		setStatus(e.target.value);
	};
	const handelUpdate = (id) => {
		fetch(`https://damp-taiga-39010.herokuapp.com/updateStatus/${id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ status }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					alert('Data Updated Succesfully');
				}
			});
	};

	useEffect(() => {
		AOS.init();
	}, []);
	useDocTitle('All Orders');
	return (
		<div className='vh-100  bg-white py-3'>
			<h1 className='fw-bold text-center text-decoration-underline'>
				Manage
				<span className='text-danger text-decoration-underline'>Orders</span>{' '}
			</h1>
			<div className='table-responsive'>
				<table className='table'>
					<thead data-aos='fade-left' data-aos-duration='2000'>
						<tr>
							<th>#</th>
							<th>Email</th>
							<th>Product Name</th>
							<th>Image</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					{orders?.map((order, index) => (
						<tbody key={order._id} className='align-middle'>
							<tr data-aos='fade-left' data-aos-duration='2000'>
								<td>{index}</td>
								<td>{order?.email}</td>
								<td>{order.modelName}</td>
								<td>
									<img src={order.imageUrl} alt='img' width='50px'></img>{' '}
								</td>
								<td className='text-center'>
									{' '}
									<select onBlur={updateStatus} className='btn btn-success'>
										<option value='Pending'> {order.status}</option>
										<option value='Shipped'>Shipped</option>
									</select>
								</td>
								<td className='text-center'>
									<button
										onClick={() => handelDelete(order._id)}
										className='btn btn-danger mb-2'>
										{danger}
									</button>
									<button
										onClick={() => handelUpdate(order._id)}
										className='btn btn-success ms-2 mb-2'>
										{update}
									</button>
									{order.payment ? (
										<button className='btn btn-secondary  ms-2 mb-2'>{paid}</button>
									) : (
										<span></span>
									)}
								</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>
		</div>
	);
};

export default AllOrders;
