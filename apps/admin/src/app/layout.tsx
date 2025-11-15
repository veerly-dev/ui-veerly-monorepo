// app/layout.tsx (Server Component)
import './global.css';
import { Providers } from '@/lib/graphql/Providers';

export const metadata = {
  title: 'Admin',
  description: 'Admin panel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
