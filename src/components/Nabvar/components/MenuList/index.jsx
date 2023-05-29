import React from 'react';
import styles from './MenuList.module.scss';
import { NavLink } from 'react-router-dom';

const menuRoutes = [
	{
		testid: 'exercise1',
		label: 'Exercise 1',
		path: '/exercise1',
	},
	{
		testid: 'exercise2',
		label: 'Exercise 2',
		path: '/exercise2',
	},
];

export const MenuList = () => {
	return (
		<ul className={styles.ul}>
			{menuRoutes.map(({ path, label, testid }, index) => (
				<NavLink
					data-testid={testid}
					className={({ isActive }) => (isActive ? styles.active : '')}
					key={path + index}
					to={path}
				>
					{label}
				</NavLink>
			))}
		</ul>
	);
};
