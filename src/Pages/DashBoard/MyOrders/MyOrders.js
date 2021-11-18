import React, { useEffect, useState } from 'react';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const MyOrders = () => {
	const [myOrders, setMyorders] = useState([]);
	const [control, setControl] = useState(false);
	const { user } = UseAuth();
	useEffect(() => {
		fetch(`https://damp-taiga-39010.herokuapp.com/myOrders/${user.email}`)
			.then((res) => res.json())
			.then((data) => {
				setMyorders(data);
			});
	}, [control]);
	const handelDelete = (id) => {
		fetch(`https://damp-taiga-39010.herokuapp.com/deleteOrder/${id}`, {
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
								<span className='broder border-success'>{orders.status}</span>
								<br />
								<button
									onClick={() => handelDelete(orders._id)}
									className='btn btn-danger btn-sm mt-1'>
									Cancel
								</button>

								{orders.payment ? (
									<button className='btn btn-secondary btn-sm ms-2 mt-1' disabled>
										Paid
									</button>
								) : (
									<Link to={`/dashboard/payment/${orders._id}`}>
										<button className='btn btn-danger btn-sm ms-1 mt-1'>pay</button>
									</Link>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyOrders;
