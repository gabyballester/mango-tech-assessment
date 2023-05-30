import React from 'react';
import styles from './BaseExercise.modules.scss';

export const BaseExercise = ({ title, children }) => {
	return (
		<div className={styles.mainContainer}>
			<p className={styles.title}>{title}</p>
			{children}
		</div>
	);
};
