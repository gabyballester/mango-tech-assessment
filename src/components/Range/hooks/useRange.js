import { useState } from 'react';

export const useRange = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [rangeValues, setRangeValues] = useState({});
	const [inputValues, setInputValues] = useState({});
	const [isEditing, setIsEditing] = useState({
		min: false,
		max: false,
	});

	const touchedLabelToEdit = (e) => {
		setErrorMessage('');
		setIsEditing((prevState) => ({
			...prevState,
			[e.target.id]: !isEditing[e.target.id],
		}));
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setInputValues((prevState) => ({
			...prevState,
			[e.target.name]: parseInt(value),
		}));
	};

	const handleSliderChangeValues = (e) => {
		let canContinue = false;
		const name = e.target.name;
		const value = e.target.value;

		if (name === 'min') {
			if (value > rangeValues.max) return;
			canContinue = true;
		}

		if (name === 'max') {
			if (value < rangeValues.min) return;
			canContinue = true;
		}

		if (canContinue) {
			setInputValues({ ...inputValues, [name]: value });
			setRangeValues({ ...rangeValues, [name]: value });
		}
	};

	return {
		errorMessage,
		setErrorMessage,
		rangeValues,
		setRangeValues,
		inputValues,
		setInputValues,
		isEditing,
		setIsEditing,
		touchedLabelToEdit,
		handleChange,
		handleSliderChangeValues,
	};
};
