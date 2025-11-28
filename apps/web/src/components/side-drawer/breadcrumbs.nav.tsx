'use client';

import { useDrawer } from './drawer.context';

export default function BreadcrumbsNav() {
  const { toggle } = useDrawer();

  return (
    <nav className="navbar w-full bg-base-300 px-4">
      <button
        onClick={toggle}
        className="btn btn-square btn-ghost"
        aria-label="Toggle Sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M3 12h18" />
          <path d="M3 6h18" />
          <path d="M3 18h18" />
        </svg>
      </button>

      <div className="ml-4 font-signature">Veerly.dev</div>
    </nav>
  );
}
