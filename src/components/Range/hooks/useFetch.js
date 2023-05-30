import { useState, useEffect } from 'react';
import { key } from '../../../constants';
import { getRangeService } from '../../../api/getRangeService';

export const useFetch = (endpoint) => {
	const [isLoading, setIsLoading] = useState(false);
	const [initialRange, setInitialRange] = useState({});
	const [hasError, setHasError] = useState('');
	const [fixedRange, setFixedRange] = useState([]);

	const fetchData = async () => {
		if (!endpoint) return;
		let res;

		try {
			setIsLoading(true);
			if (endpoint === key.normalRange) {
				res = await getRangeService(endpoint);
			}

			if (endpoint === key.fixedRange) {
				const { rangeValues } = await getRangeService(endpoint);
				setFixedRange(rangeValues);
				res = {
					min: 0,
					max: rangeValues.length - 1,
				};
			}

			setInitialRange(res);
		} catch (error) {
			setHasError(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { isLoading, initialRange, hasError, fixedRange, setFixedRange };
};
