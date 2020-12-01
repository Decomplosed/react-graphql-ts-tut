import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Provider } from 'urql';

import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
