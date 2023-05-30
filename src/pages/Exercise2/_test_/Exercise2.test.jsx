import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../../../App';
import { Exercise2 } from '..';
import { Range } from '../../../components';

describe('Exercise 2 ', () => {
	let rootApp = {};

	beforeEach(() => {
		const { container: appContainer } = render(<App />);
		const { container: exercise2 } = render(
			<BrowserRouter>
				<Exercise2 />
			</BrowserRouter>
		);
		const { container: range } = render(
			<BrowserRouter>
				<Range />
			</BrowserRouter>
		);
		rootApp.container = appContainer;
		rootApp.exercise2Container = exercise2;
		rootApp.range = range;
	});

	it('Should render Exercise 2', () => {
		const { exercise2Container } = rootApp;
		expect(exercise2Container).toBeInTheDocument();
	});
	
	it('Should render Range', () => {
		const { range } = rootApp;
		expect(range).toBeInTheDocument();
	});

	it('Should render title', () => {
		const text = 'Exercise 2: Fixed Range';
		const titleElement = screen.getAllByText(text)[0];
		expect(titleElement).toBeInTheDocument();
	});
});
