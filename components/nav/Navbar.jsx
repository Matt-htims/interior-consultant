import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Navbar.module.scss';

import { MenuItems } from './MenuItems';

import MobileMenu from './MobileMenu';

const Navbar = () => {
	const router = useRouter();

	// State
	const [open, setOpen] = useState(false);

	// Handlers
	const handleNav = () => {
		setOpen(!open);
	};

	const handleNavClose = () => {
		setOpen(false);
	};
	return (
		<>
			<nav className={styles.navbar}>
				<h1>THIS INTERIOR</h1>
				<div className={styles.navItems}>
					{MenuItems.map((item, index) => {
						return (
							<Link key={item.key} href={item.url} passHref>
								<a
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
				<button
					onClick={handleNav}
					className={
						open
							? `${styles.hamburgerButton} ${styles.hamburgerButtonOpen}`
							: `${styles.hamburgerButton}`
					}
				>
					<div className={styles.hamburgerButtonBar}></div>
					<div className={styles.hamburgerButtonBar}></div>
					<div className={styles.hamburgerButtonBar}></div>
				</button>
			</nav>
			<MobileMenu open={open} close={handleNavClose} />
		</>
	);
};

export default Navbar;
