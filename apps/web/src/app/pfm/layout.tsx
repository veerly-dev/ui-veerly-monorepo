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
        {/* DrawerProvider, SideDrawerNav, BreadcrumbsNav MUST be client components */}
        <DrawerProvider>
          <div className="flex min-h-screen overflow-hidden">
            {/* Sidebar (client component) */}
            <SideDrawerNav />

            <div className="max-h-screen min-h-screen flex-1 flex flex-col overflow-hidden">
              {/* Breadcrumb (client component) */}
              <BreadcrumbsNav />

              {/* ONLY main scrolls */}
              <main className="flex-1 overflow-y-auto p-6 bg-base-100">
                {children}
              </main>
            </div>
          </div>
        </DrawerProvider>
      </body>
    </html>
  );
}
