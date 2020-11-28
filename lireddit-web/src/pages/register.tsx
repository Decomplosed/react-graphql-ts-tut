import React from 'react';
import { Formik, Form } from 'formik';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Formik initialValues={{ username: '', password: '' }}>
      {() => (
        <Form>
          <div>Hello</div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
