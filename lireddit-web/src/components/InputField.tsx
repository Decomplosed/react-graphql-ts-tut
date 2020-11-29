import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>

const InputField: React.FC<InputFieldProps> = ({}) => {
  const [] = useField();

  return;
};

export default InputField;
