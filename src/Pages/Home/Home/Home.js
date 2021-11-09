import React from 'react';
import Banner from '../Banner/Banner';
import Ratings from '../Rating/Ratings';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
	return (
		<div>
			<Header />
			<Banner />
			<Ratings />
			<Footer />
		</div>
	);
};

export default Home;
