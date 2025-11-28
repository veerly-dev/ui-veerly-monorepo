'use client';
import { useLocalStorage } from 'react-storage-complete';
import { ReactNode } from 'react';
import { Provider } from 'urql';
import { makeUrqlClient } from './client';

export function GraphQLProvider({ children }: { children: ReactNode }) {
  const [token] = useLocalStorage<string>('authToken', undefined, {
    prefix: 'veerly',
  });
  console.log('GraphQLProvider token:', token);
  const client = makeUrqlClient(token);
  return (
    <>
      <Provider value={client}>{children}</Provider>
    </>
  );
}

export default GraphQLProvider;
