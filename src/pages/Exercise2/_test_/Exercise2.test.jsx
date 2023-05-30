import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../../../App';
import { Exercise2 } from '..';

describe('Exercise 2 ', () => {
	let rootApp = {};

	beforeEach(() => {
		const { container: appContainer } = render(<App />);
		const { container: exercise2 } = render(
			<BrowserRouter>
				<Exercise2 />
			</BrowserRouter>
		);
		rootApp.container = appContainer;
		rootApp.exercise2Container = exercise2;
	});

	it('Should render Exercise 2', () => {
		const { exercise2Container } = rootApp;
		expect(exercise2Container).toBeInTheDocument();
	});
});
