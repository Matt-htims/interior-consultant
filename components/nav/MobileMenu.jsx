import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuItems } from './MenuItems';
import styles from '../../styles/Navbar.module.scss';

const MobileMenu = ({ open, close }) => {
	const router = useRouter();
	return (
		<div
			className={
				open
					? `${styles.mobileMenu} ${styles.mobileMenuOpen}`
					: `${styles.mobileMenu}`
			}
		>
			{MenuItems.map((item, index) => {
				return (
					<Link key={item.key} href={item.url} passHref>
						<a
							onClick={close}
							className={
								router.pathname == item.url
									? `${styles.navItem} ${styles.activeNavItem}`
									: `${styles.navItem}`
							}
						>
							<p>{item.title}</p>
						</a>
					</Link>
				);
			})}
		</div>
	);
};

export default MobileMenu;
