import React from 'react';
import { Box, Link, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bg='tomato' p={4}>
      <Box ml={'auto'}>
        <Link color='white' mr={2}>
          Login
        </Link>
        <Link color='white' mr={2}>
          Register
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
