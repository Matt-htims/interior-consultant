import React from 'react';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<p>
				created by <a href="https://github.com/Matt-htims">Matt.htims</a> -
				devChallenges.io
			</p>
		</div>
	);
};

export default Footer;
