import styled from '@emotion/styled';

export const StyledInput = styled('input')({
	display: 'block',
	width: '100%',
	height: '100%',
	marginRight: '10px',
	border: '1px solid #ccc',
	outline: 'none',
	maxWidth: '100%',
	textAlign: 'right',
	'&::-webkit-outer-spin-button': {
		appearance: 'none',
	},
	'&::-webkit-inner-spin-button': {
		appearance: 'none',
	},
});
