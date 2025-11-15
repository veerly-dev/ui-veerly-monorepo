import { Client, cacheExchange, fetchExchange } from 'urql';

export const graphQLClient = new Client({
  url: 'https://api-veerly-dev.up.railway.app/serve/graphql',
  fetchOptions: () => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
  exchanges: [cacheExchange, fetchExchange],
});
