import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Provider, createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange, Cache, QueryInput } from '@urql/exchange-graphcache';

import theme from '../theme';
import { MeDocument } from '../generated/graphql';

function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => QueryInput,
) {
  return cache.updateQuery();
}

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login: (result, cache, args, info) => {
            cache.updateQuery({ query: MeDocument });
          },
        },
      },
    }),
    fetchExchange,
  ],
});

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider value={client}>
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
