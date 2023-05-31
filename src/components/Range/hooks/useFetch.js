import { useState, useEffect } from 'react';
import { api, key } from '../../../constants';
import { getRangeService } from '../../../api/getRangeService';

export const useFetch = (endpoint) => {
	const [isLoading, setIsLoading] = useState(false);
	const [initialRange, setInitialRange] = useState({});
	const [hasError, setHasError] = useState('');
	const [fixedRange, setFixedRange] = useState([]);
	const isNormalRange = endpoint === api.endpoint.normalRange;

	const fetchData = async () => {
		if (!endpoint) return;
		setIsLoading(true);
		if (endpoint === key.normalRange) {
			const response = await getRangeService(endpoint);
			if (response.status === key.KO) {
				setHasError(response.message);
			} else {
				setInitialRange(response.data);
			}
		}

		if (endpoint === key.fixedRange) {
			const response = await getRangeService(endpoint);
			if (response.status === key.KO) {
				setHasError(response.message);
			} else {
				setFixedRange(response.data.rangeValues);
				setInitialRange({
					min: 0,
					max: response.data.rangeValues.length - 1 || 0,
				});
			}
		}

		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return {
		isLoading,
		initialRange,
		hasError,
		fixedRange,
		setFixedRange,
		isNormalRange,
	};
};
