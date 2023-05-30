import { api } from '../constants';

export const getRangeService = async (endpoint) => {
	try {
		const res = await fetch(api.baseUrl + endpoint);
		return await res.json();
	} catch (error) {
		return error;
	}
};
