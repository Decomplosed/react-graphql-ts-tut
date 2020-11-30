import React from 'react';
import { Formik, Form } from 'formik';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import Wrapper from '../components/Wrapper';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {(values, handleChange) => (
        <Wrapper variant='small'>
          <Form></Form>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Register;
