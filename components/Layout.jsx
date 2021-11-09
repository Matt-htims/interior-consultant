import React from 'react';
import styles from '../styles/Home.module.scss';

// Components
import Navbar from './nav/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className={styles.globalContainer}>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
