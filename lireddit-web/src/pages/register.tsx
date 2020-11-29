import React from 'react';
import { Formik, Form } from 'formik';
import { FormControl, FormLabel } from '@chakra-ui/react';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form>
          <FormControl>
            <FormLabel htmlFor='username'>Username</FormLabel>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
