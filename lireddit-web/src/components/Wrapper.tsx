import React from 'react';
import { Box } from '@chakra-ui/react';

interface WrapperProps {
  variant: 'small' | 'regular';
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box maxW='800px' w='100%' mt={8} mx='auto'>
      {children}
    </Box>
  );
};

export default Wrapper;
