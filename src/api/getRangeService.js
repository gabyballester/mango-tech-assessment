import { api, key } from '../constants';

export const getRangeService = async (endpoint) => {
	let status;
	let data;

	try {
		const response = await fetch(api.baseUrl + '/' + endpoint);
		data = await response.json();

		if (!data) {
			status = key.KO;
			message = 'No data';
		}

		if (endpoint === key.normalRange) {
			if (!data.hasOwnProperty('min') || !data.hasOwnProperty('max')) {
				status = key.KO;
				message = 'Malformed data';
			}
		}

		if (endpoint === key.normalRange) {
			if (!data.hasOwnProperty('rangeValues') || !data.rangeValues.length) {
				status = key.KO;
				message = 'Malformed data';
			}
		}

		return { status, data };
	} catch (error) {
		return { status: key.KO, message: 'Server Error' };
	}
};
