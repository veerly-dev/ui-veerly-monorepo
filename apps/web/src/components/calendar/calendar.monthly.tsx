'use client';

import { enUS } from 'date-fns/locale';
import { getDaysInMonthForCalendar, getWeekdayNames } from './calendar.utils';
import { format, isSameMonth, isToday } from 'date-fns';

export interface MonthlyCalendarViewIface {
  handleDateSelect: (date: Date) => void;
  currentDate: Date;
}

export const MonthlyCalendarView = (props: MonthlyCalendarViewIface) => {
  const { currentDate, handleDateSelect } = props;
  const weekDays = getWeekdayNames('EEE', enUS, 0);
  const days = getDaysInMonthForCalendar(currentDate);

  return (
    <>
      <div className="w-full h-fit grid grid-cols-7 border-2 border-b-0 border-base-300 rounded-t-md">
        {weekDays.map((day) => (
          <div
            key={day}
            className={`flex items-center justify-center border border-l border-t border-base-200 cursor-pointer`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="w-full h-full grid grid-cols-7 border-2 border-base-300 border-t-0 rounded-b-md">
        {days.map((date, index) => {
          const isCurrentMonth = isSameMonth(date, currentDate);
          const isCurrentDay = isToday(date);

          return (
            <div
              key={index}
              onClick={() => handleDateSelect(date)}
              className={`
                flex border border-l border-t border-base-200 cursor-pointer
                ${isCurrentMonth ? '' : 'bg-slate-200 text-slate-400'}
                ${
                  isCurrentDay
                    ? 'bg-primary hover:bg-info text-primary-content'
                    : ''
                }
                hover:bg-slate-300
              `}
            >
              <div className="w-full flex flex-col pga-1">
                <div className="w-full flex justify-center">
                  {format(date, 'd')}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
