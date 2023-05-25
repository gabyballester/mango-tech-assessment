import React, { useEffect, useState } from 'react';
import styles from './Exercise1.modules.scss';
import { Range } from '../../components/Range';

export const Exercise1 = () => {
	return (
		<div className={styles.mainContainer}>
			<p className={styles.title}>Exercise 1: Normal Range</p>
				<Range />
		</div>
	);
};
