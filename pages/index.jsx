import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import { MdArrowRightAlt } from 'react-icons/md';

// Components
import Card from '../components/Card';

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
			<main className={styles.main}>
				<div className={styles.copyContainer}>
					<div className={styles.copy}>
						<h2>Modern interior</h2>
						<p className={styles.mainCopy}>
							A full-Service residential & commercial interior design and
							staging company offering professional organizing & eco-services.
						</p>
						<button>
							<p>Read more</p> <MdArrowRightAlt size={30} />
						</button>
					</div>
				</div>
				<div className={styles.image}>
					<Image
						src="/photo1.png"
						alt="Interior of a room"
						width={737}
						height={555}
						layout="responsive"
					/>
					<div className={styles.card}>
						<Card />
					</div>
				</div>
			</main>
		</div>
	);
}
