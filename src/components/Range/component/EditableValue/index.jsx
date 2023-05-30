import React from 'react';
import { CustomInput, CustomLabel } from './components';
import { useEditableValue } from './hooks/useEditableValue';

import styles from './EditableValue.modules.scss';
import { api } from '../../../../constants';

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

	return (
		<div className={styles.amountWrapper}>
			{isEdit && endpoint === api.endpoint.normalRange ? (
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
					rangeValue={
						endpoint === api.endpoint.fixedRange
							? fixedRange[rangeValue]
							: rangeValue
					}
				/>
			)}
		</div>
	);
};
