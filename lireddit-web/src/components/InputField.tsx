import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/core';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

const InputField: React.FC<InputFieldProps> = ({}) => {
  const [field] = useField(props);

  return (
    <FormControl>
      <FormLabel></FormLabel>
    </FormControl>
  )
};

export default InputField;
