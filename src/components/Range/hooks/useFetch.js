import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialRange, setInitialRange] = useState({});
  const [hasError, setHasError] = useState('');

  const getData = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      console.log(json);
      setInitialRange(json);
    } catch (error) {
      setHasError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, initialRange, hasError };
};
