// utils/dateUtils.js
import { format, getDate, getDay, setHours, setMinutes } from 'date-fns';
// utils/calendarUtils.js
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
} from 'date-fns';

export const getWeekdayNames = (
  formatType = 'EEEE',
  locale: any,
  weekStartsOn = 0
) => {
  // Start from Sunday or Monday based on preference
  const baseDate = new Date(2024, 0, weekStartsOn); // Jan 0/1/2/... depending on start

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + i);
    return format(date, formatType, { locale });
  });
};

/**
 * Get all dates for a calendar month (including prev/next month padding)
 * @param {Date} date - Any date in the target month
 * @returns {Date[]} Array of 42 Date objects (6 weeks)
 */
export const getDaysInWeekForCalendar = (date: Date) => {
  const firstDayOfWeek = startOfWeek(date);
  const lastDayOfWeek = endOfWeek(date);

  // Start from the Sunday on or before the 1st of the month
  const start = startOfWeek(firstDayOfWeek, { weekStartsOn: 0 }); // Sunday = 0
  // End at the Saturday on or after the last day of the month
  const end = endOfWeek(lastDayOfWeek, { weekStartsOn: 0 });

  // Generate all days in that range
  return eachDayOfInterval({ start, end });
};

/**
 * Get all dates for a calendar month (including prev/next month padding)
 * @param {Date} date - Any date in the target month
 * @returns {Date[]} Array of 42 Date objects (6 weeks)
 */
export const getDaysInMonthForCalendar = (date: Date) => {
  const firstDayOfMonth = startOfMonth(date);
  const lastDayOfMonth = endOfMonth(date);

  // Start from the Sunday on or before the 1st of the month
  const start = startOfWeek(firstDayOfMonth, { weekStartsOn: 0 }); // Sunday = 0
  // End at the Saturday on or after the last day of the month
  const end = endOfWeek(lastDayOfMonth, { weekStartsOn: 0 });

  // Generate all days in that range
  return eachDayOfInterval({ start, end });
};

export function get24HourLabels(locale: any) {
  const labels: string[] = [];

  // Base date is today at midnight
  const base = new Date();

  for (let hour = 0; hour < 24; hour++) {
    const time = setMinutes(setHours(base, hour), 0);
    labels.push(format(time, 'hh:mm a', { locale }));
  }

  return labels;
}

export const getTodayParts = (locale: any) => {
  const today = new Date();
  return {
    day: format(today, 'EEEE', { locale }),
    month: format(today, 'MMMM', { locale }),
    year: format(today, 'yyyy', { locale }),
    date: format(today, 'd', { locale }),
    iso: format(today, 'yyyy-MM-dd'),
    full: format(today, 'EEEE, MMMM do, yyyy', { locale }),
  };
};

export function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const days = [];

  // Leading blanks (Sun = 0)
  for (let i = 0; i < firstDay.getDay(); i++) {
    days.push(null);
  }

  // Actual days in month
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(year, month, d));
  }

  return days;
}

export function getGMTOffset(): string {
  const offset = new Date().getTimezoneOffset(); // in minutes
  const sign = offset > 0 ? '-' : '+';
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;

  // Format like GMT-05 or GMT+05:30
  return `GMT${sign}${hours.toString().padStart(2, '0')}${
    minutes > 0 ? `:${minutes.toString().padStart(2, '0')}` : ''
  }`;
}

export function getDayInDateForCalendar(date: Date, locale: any) {
  const today = new Date(date);
  return [format(today, 'EEEE', { locale })];
}

export function getWeekOfMonth(date: Date): string {
  const start = startOfMonth(date); // first day of month
  const dayOfMonth = getDate(date);
  const startWeekDay = getDay(start); // 0 = Sunday, 1 = Monday, etc.

  // Calculate week number in month
  const weekNumber = Math.ceil((dayOfMonth + startWeekDay) / 7);

  const ordinals = ['first', 'second', 'third', 'fourth', 'fifth'];
  return ordinals[weekNumber - 1] || `${weekNumber}th`;
}
