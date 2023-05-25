import React from 'react';
import styles from './CustomLabel.modules.scss';

export const CustomLabel = ({ touchedLabelToEdit, field, rangeValue }) => {
	return (
		<div className={styles.inputWrapper}>
			<label htmlFor={field} id={field} onClick={touchedLabelToEdit}>
				{rangeValue}
			</label>
			<span>€</span>
		</div>
	);
};
