import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';
import styles from './App.modules.scss';
import { Exercise1, Exercise2 } from './pages';

export const App = () => {
	return (
		<BrowserRouter>
			<div className={styles.container}>
				<Navbar />
				<main className={styles.main}>
					<Routes>
						<Route
							path="/"
							element={<h3>Click on the top menu to see each exercise</h3>}
						/>
						<Route path="/exercise1" element={<Exercise1 />} />
						<Route path="/exercise2" element={<Exercise2 />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};
