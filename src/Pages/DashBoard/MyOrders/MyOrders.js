import React, { useEffect, useState } from 'react';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import { useAlert } from 'react-alert';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
const MyOrders = () => {
	const [myOrders, setMyorders] = useState([]);
	const [control, setControl] = useState(false);
	const { user } = UseAuth();
	const alert = useAlert();
	useEffect(() => {
		fetch(`http://localhost:5000/myOrders/${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				setMyorders(data);
			});
	}, [control]);
	const handelDelete = (id) => {
		fetch(`http://localhost:5000/deleteOrder/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					alert.success('Deleted Succesfully');
					setControl(!control);
				}
			});
	};
	useEffect(() => {
		AOS.init();
	}, []);
	useDocTitle('My Orders');
	return (
		<div
			style={{
				marginTop: '60px',
				marginBottom: '60px',
			}}
			className='bg-white vh-100'>
			<div className='row mx-auto row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
				{myOrders.map((orders) => (
					<div
						key={orders._id}
						className='col'
						data-aos='fade-left'
						data-aos-duration='2000'>
						<div
							className='d-flex align-items-center justify-content-evenly shadow p-3'
							style={{ height: '220px' }}>
							<img src={orders.imageUrl} width='150px' alt='' />
							<div>
								<h6>{orders.modelName}</h6>

								<span className='text-success'>${orders.price}</span>
								<br />
								<button
									onClick={() => handelDelete(orders._id)}
									className='btn btn-danger btn-sm'>
									Cancel
								</button>
								<div></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyOrders;
