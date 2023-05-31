import React from 'react';
import { CustomInput, CustomLabel } from './components';
import { useEditableValue } from './hooks/useEditableValue';

import styles from './EditableValue.modules.scss';
import { api } from '../../../../constants';
import { useFetch } from '../../hooks/useFetch';

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
	endpoint,
	fixedRange,
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

	const { isNormalRange } = useFetch(endpoint);

	return (
		<div className={styles.amountWrapper}>
			{isEdit && isNormalRange ? (
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
					isNormalRange={isNormalRange}
					touchedLabelToEdit={touchedLabelToEdit}
					field={field}
					rangeValue={
						isNormalRange ? rangeValue : fixedRange[rangeValue]
					}
				/>
			)}
		</div>
	);
};
