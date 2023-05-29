import { api } from "../constants";

export const getNormalRangeService = async () => {
  const { baseUrl, endpoint } = api
  try {
    return (await fetch(baseUrl + endpoint.normalRange)).json();
  } catch (error) {
    return error;
  }
};