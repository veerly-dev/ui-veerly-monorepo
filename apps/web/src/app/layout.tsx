// apps/web/src/app/layout.tsx
import './global.css';
import { GraphQLProvider } from '@veerly/shared/graphql';

export const metadata = {
  title: 'Veerly Web App',
  description: 'PWA version of Veerly Web App',
  manifest: '/manifest.json',
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/icon-192x192.png',
  },
};

// Required for PWA in Next.js 15+
export const viewport = {
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA Essentials */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>

      <body>
        <GraphQLProvider>{children}</GraphQLProvider>
      </body>
    </html>
  );
}
