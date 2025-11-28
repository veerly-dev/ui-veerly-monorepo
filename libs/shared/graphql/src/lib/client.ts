import { createClient, cacheExchange, fetchExchange } from 'urql';

export function makeUrqlClient(token: string | null | undefined) {
  return createClient({
    url: 'https://api-veerly-dev.up.railway.app/serve/graphql',
    fetchOptions: () => ({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
    }),
    exchanges: [cacheExchange, fetchExchange],
  });
}
