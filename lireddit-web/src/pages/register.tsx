import React from 'react';
import { Formik, Form } from 'formik';
import Wrapper from '../components/Wrapper';
import InputField from '../components/Wrapper';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {(values, handleChange) => (
        <Wrapper variant='small'>
          <Form>
            <InputField
              name='username'
              placeholder='username'
              label='Username'
            />
          </Form>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Register;
