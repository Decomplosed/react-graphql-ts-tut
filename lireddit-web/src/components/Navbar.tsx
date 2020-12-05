import React from 'react';
import { Box, Link } from '@chakra-ui/react';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg='tomato' p={4} ml={'auto'}>
      <Link>Login</Link>
      <Link>Register</Link>
    </Box>
  );
};

export default NavBar;
