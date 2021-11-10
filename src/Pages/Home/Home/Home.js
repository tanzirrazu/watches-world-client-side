import React from 'react';
import Banner from '../Banner/Banner';
import OurPartnars from '../OurPartnars/OurPartnars';

import Products from '../Products/Products';
import Ratings from '../Rating/Ratings';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
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
