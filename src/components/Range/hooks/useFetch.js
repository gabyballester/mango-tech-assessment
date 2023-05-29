import { useState, useEffect } from 'react';
import { getNormalRangeService } from '../../../api/getNormalRange';
import { key } from '../../../constants';

export const useFetch = (type) => {
	const [isLoading, setIsLoading] = useState(false);
	const [initialRange, setInitialRange] = useState({});
	const [hasError, setHasError] = useState('');

	const fetchData = async () => {
		if (!type) return;
		let res;

		try {
			setIsLoading(true);
			if (type === key.normalRange) {
				res = await getNormalRangeService();
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

	return { isLoading, initialRange, hasError };
};
