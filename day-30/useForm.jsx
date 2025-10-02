import { useState } from "react";

function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (validate) {
      setErrors(validate({ ...values, [name]: value }));
    }
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      callback();
    }
  };

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
