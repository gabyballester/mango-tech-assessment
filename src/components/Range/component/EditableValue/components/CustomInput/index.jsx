import React, { useEffect, useRef } from 'react';
import { StyledInput } from './StyledInput';
import { StyledWrapper } from './StyledWrapper';

export const CustomInput = ({
	handleBlur,
	handleChange,
	field,
	inputValue,
	onEnterKeyDown,
}) => {
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, [inputRef]);

	return (
		<StyledWrapper onBlur={handleBlur}>
			<StyledInput
				onKeyDown={onEnterKeyDown}
				ref={inputRef}
				onChange={handleChange}
				type="number"
				name={field}
				id={field}
				value={inputValue}
			/>
			<span>€</span>
		</StyledWrapper>
	);
};
