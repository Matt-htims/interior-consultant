import React from 'react';
import Image from 'next/image';

import styles from '../styles/Card.module.scss';

const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<div className={styles.image}>
					<Image
						src="/photo2.png"
						alt="Photo of Aliza Webber"
						width={50}
						height={50}
					/>
				</div>
				<div className={styles.headerText}>
					<h4>Aliza Webber</h4>
					<p>Interior designer</p>
				</div>
			</div>
			<div className={styles.body}>
				<h3>Designed in 2020 by Aliza Webber</h3>
			</div>
		</div>
	);
};

export default Card;
