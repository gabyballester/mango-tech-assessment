import React, { useEffect } from 'react';
import { EditableValue } from './component/EditableValue';

import styles from './Range.modules.scss';
import { useRange } from './hooks/useRange';

export const Range = () => {
	const {
		errorMessage,
		setErrorMessage,
		rangeValues,
		setRangeValues,
		inputValues,
		setInputValues,
		isEditing,
		setIsEditing,
		getInitialValuesService,
		touchedLabelToEdit,
		handleChange,
	} = useRange();

	useEffect(() => {
		const data = getInitialValuesService();
		setRangeValues(data);
		setInputValues(data);
	}, []);

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
	};

	const editableValueProps = [
		{
			isEdit: isEditing.min,
			rangeValue: rangeValues.min,
			inputValue: inputValues.min,
			field: 'min',
			key: 'min',
			...commonEditableValueProps,
		},
		{
			isEdit: isEditing.max,
			rangeValue: rangeValues.max,
			inputValue: inputValues.max,
			field: 'max',
			key: 'max',
			...commonEditableValueProps,
		},
	];

	return (
		<div className={styles.rangeWrapper}>
			<div className={styles.rangeContent}>
				{editableValueProps.map((editableValue) => {
					return <EditableValue {...editableValue} />;
				})}
			</div>
			<p className={errorMessage ? styles.show : styles.hide}>{errorMessage}</p>
		</div>
	);
};
