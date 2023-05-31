import { key } from "../../../../../constants";

export const useEditableValue = ({
	inputValue,
	rangeValues,
	setErrorMessage,
	isEditing,
	setInputValues,
	setRangeValues,
	setIsEditing,
}) => {
	const handleBlur = (e) => {
		setErrorMessage('');
		const name = e.target.name;
		setIsEditing((prevState) => ({
			...prevState,
			[name]: !isEditing[name],
		}));
		const { canContinue, message, type } = validateMinMaxRange(name);
		if (!canContinue) {
			setErrorMessage(message);
			setInputValues((prevState) => ({
				...prevState,
				[type]: rangeValues[type],
			}));
		} else {
			setRangeValues((prevState) => ({ ...prevState, [name]: inputValue }));
		}
	};

	const validateMinMaxRange = (id) => {
		let canContinue;
		let message;
		if (id === key.min) {
			if (inputValue > rangeValues.max) {
				message = 'Max value, ' + rangeValues.max;
				canContinue = false;
			} else if (inputValue < 0) {
				message = 'Min value: 0';
				canContinue = false;
			} else {
				canContinue = true;
			}
		}

		if (id === key.max) {
			if (inputValue < 0) {
				message = 'Min value: ' + rangeValues.min;
				canContinue = false;
			} else if (inputValue < rangeValues.min) {
				message = 'Min value: ' + rangeValues.min;
				canContinue = false;
			} else {
				canContinue = true;
			}
		}

		return {
			canContinue,
			message,
			type: id,
		};
	};

	const onEnterKeyDown = (e) => {
		if (e.keyCode === 13) {
			handleBlur(e);
		}
	};

	return {
		handleBlur,
		onEnterKeyDown,
	};
};
