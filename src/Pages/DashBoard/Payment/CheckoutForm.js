import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import { Spinner } from 'react-bootstrap';
const CheckoutForm = ({ paymentInfo }) => {
	const { price, modelName, _id } = paymentInfo;
	const { user } = UseAuth();
	const stripe = useStripe();
	const elements = useElements();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [processing, setProcessing] = useState(false);
	const [clientSecret, setClientSecret] = useState('');

	useEffect(() => {
		fetch('https://damp-taiga-39010.herokuapp.com/create-payment-intent', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ price }),
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setClientSecret(data.clientSecret);
			});
	}, [price]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}
		setProcessing(true);
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});
		if (error) {
			setError(error.message);
			setSuccess('');
		} else {
			setError('');
			console.log(paymentMethod);
		}
		const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
			clientSecret,
			{
				payment_method: {
					card: card,
					billing_details: {
						name: modelName,
						email: user.email,
					},
				},
			}
		);
		if (intentError) {
			setError(intentError.message);
			setSuccess('');
		} else {
			setSuccess('Your payment Successfuly done');
			setError('');
			console.log(paymentIntent);
			setProcessing(false);
			// save to database
			const payment = {
				amount: paymentIntent.amount,
				created: paymentIntent.created,
				last4: paymentMethod.last4,
				transaction: paymentIntent.client_secret.slice('_secret')[0],
			};
			const url = `https://damp-taiga-39010.herokuapp.com/allOrders/${_id}`;
			fetch(url, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(payment),
			});
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				{processing ? (
					<Spinner animation='border' variant='primary' />
				) : (
					<button type='submit' disabled={!stripe || success}>
						Pay {price}
					</button>
				)}
			</form>
			{error && <p className='text-danger'>{error}</p>}
			{success && <p className='text-success'>{success}</p>}
		</div>
	);
};

export default CheckoutForm;
