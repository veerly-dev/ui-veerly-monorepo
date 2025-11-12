import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'Veerly',
  description: 'Progressive Web App built with Next.js & Nx',
  manifest: '/manifest.json',
  themeColor: '#0f172a',
  icons: {
    icon: '/icons/icon-192x192.png',
    apple: '/icons/icon-512x512.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
