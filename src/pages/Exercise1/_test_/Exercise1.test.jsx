import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../../../App';
import { Exercise1 } from '..';
import { Range } from '../../../components';

describe('Exercise 1 ', () => {
	let rootApp = {};

	beforeEach(() => {
		const { container: appContainer } = render(<App />);
		const { container: exercise1 } = render(
			<BrowserRouter>
				<Exercise1 />
			</BrowserRouter>
		);
		const { container: range } = render(
			<BrowserRouter>
				<Range />
			</BrowserRouter>
		);
		rootApp.container = appContainer;
		rootApp.exercise1Container = exercise1;
		rootApp.range = range;
	});

	it('Should render Exercise 1', () => {
		const { exercise1Container } = rootApp;
		expect(exercise1Container).toBeInTheDocument();
	});

	it('Should render Range', () => {
		const { range } = rootApp;
		expect(range).toBeInTheDocument();
	});

	it('Should render title', () => {
		const text = 'Exercise 1: Normal Range';
		const titleElement = screen.getByText(text);
		expect(titleElement).toBeInTheDocument();
	});
});
