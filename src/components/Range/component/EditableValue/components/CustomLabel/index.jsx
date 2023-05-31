import React, { useEffect } from 'react';
import styles from './CustomLabel.modules.scss';

export const CustomLabel = ({
	touchedLabelToEdit,
	field,
	rangeValue,
	isNormalRange,
}) => {
	return (
		<div className={styles.inputWrapper}>
			<label
				className={isNormalRange ? styles.cursorPointer : null}
				htmlFor={field}
				id={field}
				onClick={touchedLabelToEdit}
			>
				{rangeValue}
			</label>
			<span>€</span>
		</div>
	);
};
