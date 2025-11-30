export type CalendarEvent = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
};

export async function fetchMockEvents(): Promise<CalendarEvent[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', title: 'Team Meeting', date: '2025-01-10' },
        { id: '2', title: 'Client Review', date: '2025-01-12' },
        { id: '3', title: 'Sprint Planning', date: '2025-01-15' },
      ]);
    }, 300);
  });
}
