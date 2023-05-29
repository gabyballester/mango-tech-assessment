import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { Navbar } from './components';
import { BrowserRouter } from 'react-router-dom';

describe('App test', () => {
	let rootApp = {};

	beforeEach(() => {
		const { container: appContainer } = render(<App />);
		const { container: navContainer } = render(
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		);
		rootApp.container = appContainer;
		rootApp.navContainer = navContainer;
	});

	it('Sould render /', () => {
		expect(window.location.pathname).toBe('/');
	});

	it('Should render App', () => {
		const { container } = rootApp;
		expect(container).toBeInTheDocument();
	});

	it('Should render title', () => {
		const text = 'Click on the top menu to see each exercise';
		const titleElement = screen.getByText(text);
		expect(titleElement).toBeInTheDocument();
	});

	it('Should render navbar', () => {
		const { navContainer } = rootApp;
		expect(navContainer).toBeInTheDocument();
	});
});
