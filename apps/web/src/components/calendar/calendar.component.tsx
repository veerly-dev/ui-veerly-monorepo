'use client';

import { useMemo, useState } from 'react';
import { enUS } from 'date-fns/locale';
import { format, getMonth, getWeek, getWeekOfMonth, getYear } from 'date-fns';
import { MonthlyCalendarView } from './calendar.monthly';
import { WeeklyCalendarView } from './calendar.weekly';
import { DayCalendarView } from './calendar.day';

const CalendarComponent = () => {
  const [view, setView] = useState<'day' | 'week' | 'month'>('month');
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousMonth = () => {
    if (view === 'month') {
      setCurrentDate((prev) => new Date(getYear(prev), getMonth(prev) - 1, 1));
    } else if (view === 'week') {
      setCurrentDate((prev) => {
        const newDate = new Date(prev);
        newDate.setDate(newDate.getDate() - 7);
        return newDate;
      });
    } else if (view === 'day') {
      setCurrentDate((prev) => {
        const newDate = new Date(prev);
        newDate.setDate(newDate.getDate() - 1);
        return newDate;
      });
    }
  };

  const goToNextMonth = () => {
    if (view === 'month') {
      setCurrentDate((prev) => new Date(getYear(prev), getMonth(prev) + 1, 1));
    } else if (view === 'week') {
      setCurrentDate((prev) => {
        const newDate = new Date(prev);
        newDate.setDate(newDate.getDate() + 7);
        return newDate;
      });
    } else if (view === 'day') {
      setCurrentDate((prev) => {
        const newDate = new Date(prev);
        newDate.setDate(newDate.getDate() + 1);
        return newDate;
      });
    }
  };

  const currentDateLabel = useMemo(() => {
    if (view === 'month') {
      return format(currentDate, 'MMMM yyyy', { locale: enUS });
    } else if (view === 'week') {
      return `${getWeekOfMonth(currentDate)} week of ${format(
        currentDate,
        'MMMM yyyy',
        {
          locale: enUS,
        }
      )}`;
    } else if (view === 'day') {
      return format(currentDate, 'dd (EEEE) MMM yyyy', { locale: enUS });
    }
    return format(currentDate, 'MMMM yyyy', { locale: enUS });
  }, [currentDate, view]);

  const onDateSelect = (date: Date) => {
    console.log('Clicked date:', date);
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center md:justify-start items-center">
          <button
            onClick={goToPreviousMonth}
            className="px-3 py-1 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h2 className="text-xl font-semibold mx-4">{currentDateLabel}</h2>
          <button
            onClick={goToNextMonth}
            className="px-3 py-1 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-end items-center">
          <div className="flex justify-end">
            <button
              className={`btn btn-ghost hover:bg-transparent hover:text-info ${
                view === 'day' ? 'text-primary' : ''
              }`}
              onClick={() => setView('day')}
            >
              Day
              {view === 'day' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              )}
            </button>
            <div className="divider divider-horizontal"></div>
            <button
              className={`btn btn-ghost hover:bg-transparent hover:text-info ${
                view === 'week' ? 'text-primary' : ''
              }`}
              onClick={() => setView('week')}
            >
              Week
              {view === 'week' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              )}
            </button>
            <div className="divider divider-horizontal"></div>
            <button
              className={`btn btn-ghost hover:bg-transparent hover:text-info ${
                view === 'month' ? 'text-primary' : ''
              }`}
              onClick={() => setView('month')}
            >
              Month
              {view === 'month' && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {view === 'month' && (
        <MonthlyCalendarView
          currentDate={currentDate}
          handleDateSelect={onDateSelect}
        />
      )}
      {view === 'week' && (
        <WeeklyCalendarView
          currentDate={currentDate}
          handleDateSelect={onDateSelect}
        />
      )}
      {view === 'day' && (
        <DayCalendarView
          currentDate={currentDate}
          handleDateSelect={onDateSelect}
        />
      )}
    </>
  );
};

export default CalendarComponent;
