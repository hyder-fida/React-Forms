import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEidt] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputValues = (event) => {
    setEnteredValue(event.target.value);
    setDidEidt(false);
  };

  function handleInputBlur(identifier) {
    setDidEidt(true);
  }

  return {
    value: enteredValue,
    handleInputValues,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
