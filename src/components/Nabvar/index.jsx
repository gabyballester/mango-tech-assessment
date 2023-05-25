import React from 'react';
import { MenuList } from './components/MenuList';

import styles from './Navbar.module.scss';

export const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div>
				<h3>MANGO Tech Assessment</h3>
				<h2>Range Slider</h2>
			</div>
			<MenuList />
		</nav>
	);
};
