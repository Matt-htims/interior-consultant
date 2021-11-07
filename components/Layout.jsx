import React from 'react';

// Components
import Navbar from './nav/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
