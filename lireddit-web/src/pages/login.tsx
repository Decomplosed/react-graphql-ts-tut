import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Button } from '@chakra-ui/react';
import Wrapper from '../components/Wrapper';
import { useRouter } from 'next/router';
import { useLoginMutation } from '../generated/graphql';

const Login: React.FC<{}> = () => {
  const router = useRouter();
  const [, login] = useLoginMutation();

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {}}
      ></Formik>
    </Wrapper>
  );
};
