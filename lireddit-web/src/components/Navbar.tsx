import React from 'react';
import { Box } from '@chakra-ui/react';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg='tomato' p={4} ml={'auto'}>
      NAVBAR
    </Box>
  );
};

export default NavBar;
