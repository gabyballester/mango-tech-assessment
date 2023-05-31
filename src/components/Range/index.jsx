import React, { useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { useRange } from './hooks/useRange';

import { EditableValue } from './component/EditableValue';
import { CustomSlider } from './component/CustomSlider';

import styles from './Range.modules.scss';
import { key } from '../../constants';

export const Range = ({ endpoint }) => {
	const { isLoading, initialRange, hasError, fixedRange, isNormalRange } =
		useFetch(endpoint);

	const {
		errorMessage,
		rangeValues,
		setRangeValues,
		inputValues,
		setInputValues,
		handleSliderChangeValues,
		setErrorMessage,
		touchedLabelToEdit,
		handleChange,
		isEditing,
		setIsEditing,
	} = useRange();

	useEffect(() => {
		setRangeValues(initialRange);
		setInputValues(initialRange);
	}, [initialRange]);

	const commonCustomSliderProps = {
		type: 'range',
		min: '0',
		max: isNormalRange ? '100' : fixedRange.length - 1,
	};

	const sliderProps = [
		{
			...commonCustomSliderProps,
			name: key.min,
			id: key.min,
			value: rangeValues.min,
			onChange: handleSliderChangeValues,
		},
		{
			...commonCustomSliderProps,
			name: key.max,
			id: key.max,
			value: rangeValues.max,
			onChange: handleSliderChangeValues,
		},
	];

	const commonEditableValueProps = {
		touchedLabelToEdit,
		handleChange,
		setIsEditing,
		isEditing,
		setErrorMessage,
		rangeValues,
		setRangeValues,
		inputValues,
		setInputValues,
		fixedRange,
		endpoint,
	};

	const editableValueProps = {
		min: {
			isEdit: isEditing.min,
			rangeValue: rangeValues.min,
			inputValue: inputValues.min,
			field: key.min,
			key: key.min,
			...commonEditableValueProps,
		},
		max: {
			isEdit: isEditing.max,
			rangeValue: rangeValues.max,
			inputValue: inputValues.max,
			field: key.max,
			key: key.max,
			...commonEditableValueProps,
		},
	};

	if (isLoading) return <p className={styles.isLoading}>Loading...</p>;
	if (hasError) return <p className={styles.hasError}>{hasError}</p>;

	return (
		!isLoading &&
		!hasError && (
			<div className={styles.rangeWrapper}>
				<EditableValue {...editableValueProps.min} />
				<div className={styles.rangeContainer}>
					<div className={styles.grayline}></div>
					{sliderProps.map((props) => (
						<CustomSlider key={props.id} {...props} />
					))}
				</div>
				<EditableValue {...editableValueProps.max} />
				<p className={errorMessage || hasError ? styles.show : styles.hide}>
					{errorMessage}
					{hasError}
				</p>
			</div>
		)
	);
};
