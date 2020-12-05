import React from 'react';
import { Box, Link, Flex } from '@chakra-ui/react';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg='tomato' p={4}>
      <Box ml={'auto'}>
        <Link mr={2}>Login</Link>
        <Link mr={2}>Register</Link>
      </Box>
    </Box>
  );
};

export default NavBar;
