// app/layout.tsx (Server Component)
import './global.css';
import { GraphQLProvider } from '@veerly/shared/graphql';

export const metadata = {
  title: 'veerly.dev',
  description: 'My PFM Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GraphQLProvider>{children}</GraphQLProvider>
      </body>
    </html>
  );
}
