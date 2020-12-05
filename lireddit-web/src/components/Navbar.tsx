import React from 'react';
import { Box, Link, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href='/login'>
          <Link color='white' mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href='/register'>
          <Link color='white' mr={2}>
            Register
          </Link>
        </NextLink>
      </>
    );
  } else {
    body = <Box>{data.me.username}</Box>;
  }
  return (
    <Flex bg='tomato' p={4}>
      <Box ml={'auto'}></Box>
    </Flex>
  );
};

export default NavBar;
