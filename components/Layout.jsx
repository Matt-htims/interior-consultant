import React from 'react';

// Components
import Navbar from './nav/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
};

export default Layout;
