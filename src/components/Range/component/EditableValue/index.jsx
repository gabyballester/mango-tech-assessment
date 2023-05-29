import React from 'react';
import { CustomInput, CustomLabel } from './components';
import { useEditableValue } from './hooks/useEditableValue';

import styles from './EditableValue.modules.scss';

export const EditableValue = ({
	isEdit,
	field,
	inputValue,
	setInputValues,
	rangeValue,
	rangeValues,
	setRangeValues,
	handleChange,
	setIsEditing,
	isEditing,
	touchedLabelToEdit,
	setErrorMessage,
}) => {
	const { handleBlur, onEnterKeyDown } = useEditableValue({
		inputValue,
		rangeValues,
		setErrorMessage,
		isEditing,
		setInputValues,
		setRangeValues,
		setIsEditing,
	});

	return (
		<div className={styles.amountWrapper}>
			{isEdit ? (
				<CustomInput
					handleBlur={handleBlur}
					handleChange={handleChange}
					field={field}
					inputValue={inputValue}
					isEdit={isEdit}
					onEnterKeyDown={onEnterKeyDown}
				/>
			) : (
				<CustomLabel
					touchedLabelToEdit={touchedLabelToEdit}
					field={field}
					rangeValue={rangeValue}
				/>
			)}
		</div>
	);
};
