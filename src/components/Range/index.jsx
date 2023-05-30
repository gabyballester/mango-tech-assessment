import React, { useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import { useRange } from './hooks/useRange';

import { EditableValue } from './component/EditableValue';
import { CustomSlider } from './component/CustomSlider';

import styles from './Range.modules.scss';
import { api } from '../../constants';

export const Range = ({ endpoint }) => {
	const { isLoading, initialRange, hasError, fixedRange } = useFetch(endpoint);

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

	if (!isLoading && hasError) {
		return <p className={styles.hasError}>Server Error: Check the url</p>;
	}

	const commonCustomSliderProps = {
		type: 'range',
		min: '0',
		max: endpoint === api.endpoint.normalRange ? '100' : fixedRange.length - 1,
	};

	const sliderProps = [
		{
			...commonCustomSliderProps,
			name: 'min',
			id: 'min',
			value: rangeValues.min,
			onChange: handleSliderChangeValues,
		},
		{
			...commonCustomSliderProps,
			name: 'max',
			id: 'max',
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
			field: 'min',
			key: 'min',
			...commonEditableValueProps,
		},
		max: {
			isEdit: isEditing.max,
			rangeValue: rangeValues.max,
			inputValue: inputValues.max,
			field: 'max',
			key: 'max',
			...commonEditableValueProps,
		},
	};

	return isLoading ? (
		<p>Loading...</p>
	) : (
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
	);
};
