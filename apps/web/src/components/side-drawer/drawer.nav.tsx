'use client';

import clsx from 'clsx';
import { useDrawer } from './drawer.context';

export default function SideDrawerNav() {
  const { isOpen, toggle } = useDrawer();

  return (
    <aside
      className={clsx(
        'bg-base-300 h-screen transition-all duration-300 ease-in-out overflow-hidden fixed md:relative flex flex-col',
        isOpen ? 'w-full md:w-64' : 'w-0 md:w-16'
      )}
    >
      <div className="flex items-center justify-between md:hidden shadow-sm bg-white">
        <div className="w-full m-2 text-2xl font-signature text-center">
          Veerly.dev
        </div>
        <button className="btn btn-ghost font-bold" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul className="menu w-full p-2 gap-2 mt-4">
        <li>
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="size-5"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>

            <span
              className={clsx(
                'transition-opacity duration-200',
                !isOpen && 'opacity-0 invisible'
              )}
            >
              Homepage
            </span>
          </button>
        </li>

        <li>
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-base-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="size-5"
            >
              <path d="M20 7h-9"></path>
              <path d="M14 17H5"></path>
              <circle cx="17" cy="17" r="3"></circle>
              <circle cx="7" cy="7" r="3"></circle>
            </svg>

            <span
              className={clsx(
                'transition-opacity duration-200',
                !isOpen && 'opacity-0 invisible'
              )}
            >
              Settings
            </span>
          </button>
        </li>
      </ul>
    </aside>
  );
}
