import { useState } from 'react';

export const useRange = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [rangeValues, setRangeValues] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [isEditing, setIsEditing] = useState({
    min: false,
    max: false,
  });

  const getInitialValuesService = () => {
    return {
      min: 10,
      max: 90,
    };
  };

  const touchedLabelToEdit = (e) => {
    setErrorMessage('');
    setIsEditing((prevState) => ({
      ...prevState,
      [e.target.id]: !isEditing[e.target.id],
    }));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValues((prevState) => ({
      ...prevState,
      [e.target.name]: parseInt(value),
    }));
  };

  return {
    errorMessage,
    setErrorMessage,
    rangeValues,
    setRangeValues,
    inputValues,
    setInputValues,
    isEditing,
    setIsEditing,
    getInitialValuesService,
    touchedLabelToEdit,
    handleChange
  }
}