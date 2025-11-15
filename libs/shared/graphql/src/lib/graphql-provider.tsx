'use client';

import { ReactNode } from 'react';
import { Provider } from 'urql';
import { graphQLClient } from './client';

export function GraphQLProvider({ children }: { children: ReactNode }) {
  return <Provider value={graphQLClient}>{children}</Provider>;
}

export default GraphQLProvider;
