'use client';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();

  const onAdminSignInClick = () => {
    router.push('signin');
  };
  return (
    <>
      {/* <div className="navbar fixed bg-slate-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-cursive">veerly.dev</a>
        </div>
      </div> */}
      <div className="hero bg-slate-100 min-h-screen">
        <div className="hero-content text-center">
          <div className="w-full">
            <div className="text-6xl font-cursive py-2 px-2 m-4">
              veerly.dev
            </div>
            <h1 className="text-5xl font-body">Personal Productivity Suite</h1>
            <p className="py-6 font-body">
              This is my personal productivity suite, designed to manage my
              farming, real estate, and YouTube channel activities. I am
              cultivating 50 acres of land with a variety of crops using hired
              labor, coordinating tasks with workers over the phone and through
              weekend farm visits. This portal helps me track expenses, maintain
              contact lists, and manage day-to-day activities. It serves as the
              admin hub for my productivity suite.
            </p>
            <div className="w-full flex flex-col justify-center items-center">
              <button
                onClick={onAdminSignInClick}
                className="w-1/4 font-body btn btn-primary text-white"
              >
                Admin, SingIn
              </button>
              <a href="signin" className="link link-accent font-body py-2 px-2">
                Try as Guest ...!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
