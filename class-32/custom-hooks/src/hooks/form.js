import { useState } from 'react';
// cb => callback => function
const useForm = (cb) => {
  const [values, setValues] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    cb(values);
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return [values, handleChange, handleSubmit];
};

export default useForm;
