import React from 'react';
import { Range } from '../../components/Range';
import { BaseExercise } from '../../components/BaseExercise';
import { api } from '../../constants';

export const Exercise2 = () => {
	return (
		<BaseExercise title="Exercise 2: Fixed Range">
			<Range endpoint={api.endpoint.fixedRange} />
		</BaseExercise>
	);
};
