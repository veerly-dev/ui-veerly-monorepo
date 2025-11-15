// apps/admin/src/lib/graphql/Providers.tsx
'use client';

import { ReactNode } from 'react';
import { Provider } from 'urql';
import { graphQLClient } from './client';

export function Providers({ children }: { children: ReactNode }) {
  return <Provider value={graphQLClient}>{children}</Provider>;
}
