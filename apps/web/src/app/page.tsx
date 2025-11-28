'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Index() {
  const router = useRouter();

  return (
    <>
      <main className="flex flex-col min-h-screen bg-white">
        <section className="w-full h-full flex flex-col items-center justify-center">
          <div className="hero min-h-screen sm:w-full md:w-1/2 lg:w-2/3">
            <div className="hero-content flex-col">
              <Image
                src="/veerly_copilot.png"
                alt="Veerly"
                width={180}
                height={180}
                className="max-w-sm rounded-full"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-cursive">Veera Obulareddy</h1>
                <p className="py-6 font-title">
                  <span className="font-cursive">veerly.dev</span> is my
                  personal, progressive web application (PWA) for todo and
                  budget planning. It helps me track daily expenses, manage
                  monthly savings, and organize financial goals through
                  customizable “pockets” such as personal, farming, rental, and
                  real-estate funds. Each pocket supports dedicated notes and
                  task lists, while the integrated full-calendar view provides a
                  day-by-day snapshot of todos, reminders, and financial
                  activities for better planning and accountability.
                </p>
                <p className="py-1 font-title">
                  I am a Senior Full-Stack Developer with 9+ years of experience
                  designing and delivering scalable, modular applications across
                  financial services, insurance, and industrial domains. My
                  expertise includes Node.js, NestJS, Drizzle ORM, GraphQL,
                  Remix.js, Next.js, React.js, Redux, Zustand, and Nx monorepos,
                  with a strong focus on clean architecture, event-driven
                  systems, and reusable component libraries. I have a proven
                  track record of leading cross-functional teams, solving
                  complex technical challenges, and enabling high-performing
                  development workflows through clear documentation, structured
                  code patterns, and reproducible build strategies. I
                  consistently build secure, high-performance, and maintainable
                  applications aligned with real business impact.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => router.push('signin')}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
