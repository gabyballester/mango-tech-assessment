import React, { useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { useRange } from './hooks/useRange';

import { EditableValue } from './component/EditableValue';
import { CustomSlider } from './component/CustomSlider';

import styles from './Range.modules.scss';
import { api, key } from '../../constants';

export const Range = () => {
	const { isLoading, initialRange, hasError } = useFetch(key.normalRange);

	const {
		errorMessage,
		setRangeValues,
		setInputValues,
		editableValueProps,
		customSliderProps,
	} = useRange();

	useEffect(() => {
		setRangeValues(initialRange);
		setInputValues(initialRange);
	}, [initialRange]);

	4;
	if (!isLoading && hasError) {
		return <p className={styles.hasError}>Server Error: Check the url</p>;
	}

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<div className={styles.rangeWrapper}>
			<EditableValue {...editableValueProps.min} />
			<div className={styles.rangeContainer}>
				<div className={styles.grayline}></div>
				<CustomSlider {...customSliderProps.min} />
				<CustomSlider {...customSliderProps.max} />
			</div>
			<EditableValue {...editableValueProps.max} />
			<p className={errorMessage || hasError ? styles.show : styles.hide}>
				{errorMessage}
				{hasError}
			</p>
		</div>
	);
};
