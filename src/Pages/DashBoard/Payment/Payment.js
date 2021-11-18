import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
const Payment = () => {
	const stripePromise = loadStripe(
		'pk_test_51Jvm4SKYJ3Pc5KN6CA5xCrSyWgQglvOMgRZl0SHkep8fNbwIuBbCdUFeHVqoDQfRNPI1Fc0IlcVRuZMUeN4ul48A00Jv2EmQuZ'
	);

	const { ordersId } = useParams();
	const [paymentInfo, setPaymentInfo] = useState({});
	useEffect(() => {
		fetch(`https://damp-taiga-39010.herokuapp.com/payment/${ordersId}`)
			.then((res) => res.json())
			.then((data) => {
				setPaymentInfo(data);
			});
	}, [ordersId]);

	return (
		<div className='vh-100 bg-white p-5 text-center'>
			<h1>
				Payment for = <span className='text-danger'>{ordersId}</span> <br />
				Products Name = {paymentInfo?.modelName}
			</h1>
			<h4 className='fw-bold'>Pay: ${paymentInfo?.price}</h4>
			<div>
				{paymentInfo?.price && (
					<Elements stripe={stripePromise}>
						<CheckoutForm paymentInfo={paymentInfo} />
					</Elements>
				)}
			</div>
		</div>
	);
};

export default Payment;
