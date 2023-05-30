import React from 'react';
import { Range } from '../../components/Range';
import { BaseExercise } from '../../components/BaseExercise';
import { api } from '../../constants';

export const Exercise1 = () => {
	return (
		<BaseExercise title="Exercise 1: Normal Range">
			<Range endpoint={api.endpoint.normalRange} />
		</BaseExercise>
	);
};
