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
  const [field, { error }] = useField(props);

  return (
    <FormControl>
      <FormLabel htmlFor='name'>First name</FormLabel>
      <Input {...field} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
