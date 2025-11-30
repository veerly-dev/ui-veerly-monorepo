'use client';

import { ReactQueryProvider } from '@veerly/shared/graphql';
import CalendarComponent from './../../../components/calendar/calendar.component';

export default function CalendarPage() {
  return (
    <ReactQueryProvider>
      <CalendarComponent />
    </ReactQueryProvider>
  );
}
