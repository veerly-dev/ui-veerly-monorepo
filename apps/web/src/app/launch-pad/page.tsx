'use client';

import Link from 'next/link';

export default function LaunchPad() {
  return (
    <div className="bg-slate-200 min-h-screen min-w-screen flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full text-6xl font-cursive m-4 text-info  flex justify-center">
          <Link href="/">veerly.dev</Link>
        </div>
        <ul className="timeline timeline-vertical">
          <li>
            <hr className="bg-info" />
            <div className="timeline-start timeline-box bg-primary text-white">
              <Link href="/">3rd-Fort Farming</Link>
            </div>
            <hr className="bg-info" />
          </li>
          <li>
            <hr className="bg-info" />
            <div className="timeline-end timeline-box bg-secondary text-white">
              <Link href="/">3rd-Fort Media</Link>
            </div>
            <hr className="bg-info" />
          </li>
          <li>
            <hr className="bg-info" />
            <div className="timeline-start timeline-box bg-warning text-white">
              <Link href="/">Blogger</Link>
            </div>
            <hr className="bg-info" />
          </li>
        </ul>
      </div>
    </div>
  );
}
