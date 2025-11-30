'use client';

import { enUS } from 'date-fns/locale';
import {
  getDaysInWeekForCalendar,
  getWeekdayNames,
  get24HourLabels,
  getGMTOffset,
} from './calendar.utils';
import { format } from 'date-fns';

export interface WeeklyCalendarViewIface {
  handleDateSelect: (date: Date) => void;
  currentDate: Date;
}

export const WeeklyCalendarView = (props: WeeklyCalendarViewIface) => {
  const { currentDate, handleDateSelect } = props;
  const weekDays = getWeekdayNames('EEE', enUS, 0);
  const days = getDaysInWeekForCalendar(currentDate);
  const todayTimeDate = get24HourLabels(enUS);

  const getDayNumber = (index: number) => {
    const startOfWeek = days[0];
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + index);
    return date;
  };

  return (
    <>
      <div className="w-full h-fit grid grid-cols-[75px_repeat(7,1fr)]">
        <div className="w-full flex flex-col justify-center items-center text-xs">
          {getGMTOffset()}
        </div>
        {weekDays.map((day, index) => (
          <div
            key={day}
            className={`flex items-center justify-center border border-l border-t border-base-200 cursor-pointer`}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="text-sm">{day}</div>
              <div className="text-lg">{format(getDayNumber(index), 'd')}</div>
            </div>
          </div>
        ))}
        {todayTimeDate.map((timeLabel, index) => {
          return (
            <>
              <div className={`w-full h-full flex`}>
                <div className="w-full h-full flex flex-col pga-1">
                  <div className="w-full h-full flex flex-col justify-start items-start min-h-16 px-2 text-xs">
                    {timeLabel}
                  </div>
                </div>
              </div>
              {days.map((date, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    className={`w-full flex border border-l border-t border-base-200 cursor-pointer`}
                  >
                    <div className="w-full flex flex-col pga-1">
                      <div className="w-full flex justify-center min-h-16"></div>
                    </div>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};
