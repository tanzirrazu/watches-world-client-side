import React from 'react';
import { useDocTitle } from '../../../hooks/DocumentTitel/DocumentTitel';
import UseAuth from '../../../hooks/UseAuth/UseAuth';
import Banner from '../Banner/Banner';
import OurPartnars from '../OurPartnars/OurPartnars';
import Products from '../Products/Products';
import Ratings from '../Rating/Ratings';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { XlviLoader } from 'react-awesome-loaders';

const Home = () => {
	useDocTitle('Home');
	const { isLoading } = UseAuth();
	if (isLoading) {
		return (
			<div className='position-absolute bottom-50 end-50'>
				<XlviLoader
					boxColors={['#EF4444', '#F59E0B', '#6366F1']}
					desktopSize={'128px'}
					mobileSize={'100px'}
				/>
			</div>
		);
	}
	return (
		<div>
			<Header />
			<Banner />
			<Products />
			<Ratings />
			<OurPartnars />
			<Footer />
		</div>
	);
};

export default Home;
