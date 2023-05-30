import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../../../App';
import { Exercise1 } from '..';

describe('Exercise 1 ', () => {
	let rootApp = {};

	beforeEach(() => {
		const { container: appContainer } = render(<App />);
		const { container: exercise1 } = render(
			<BrowserRouter>
				<Exercise1 />
			</BrowserRouter>
		);
		rootApp.container = appContainer;
		rootApp.exercise1Container = exercise1;
	});

	it('Should render Exercise 1', () => {
		const { exercise1Container } = rootApp;
		expect(exercise1Container).toBeInTheDocument();
	});
});
