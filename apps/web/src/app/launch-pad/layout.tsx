import type { Metadata } from 'next';
import BreadcrumbsNav from '../../components/side-drawer/breadcrumbs.nav';
import SideDrawerNav from '../../components/side-drawer/drawer.nav';
import { DrawerProvider } from '../../components/side-drawer/drawer.context';

export const metadata: Metadata = {
  title: 'veerly.dev: launch',
  description: 'Welcome to the launch pad of veerly.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DrawerProvider>
          <div className="flex min-h-screen">
            <SideDrawerNav />

            <div className="flex-1 flex flex-col">
              <BreadcrumbsNav />
              <main className="p-6 flex-1 bg-base-100">{children}</main>
            </div>
          </div>

          <footer className="p-4 text-center">My Global Footer</footer>
        </DrawerProvider>
      </body>
    </html>
  );
}
