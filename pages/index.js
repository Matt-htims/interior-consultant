import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Interior Consultant</title>
				<meta
					name="description"
					content="Interior consultant challenge from devChallenges.io, completed by Matt.htims"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	);
}
