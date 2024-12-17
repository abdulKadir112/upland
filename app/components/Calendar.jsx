// components/Calendar.js
"use client";
import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { FaLongArrowAltLeft ,FaLongArrowAltRight} from "react-icons/fa";


const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const renderHeader = () => (
        <>
            <div className='py-6'>
                <h2 className='font-Darker font-semibold text-[28px] text-black'>{format(currentMonth, 'MMMM yyyy')}</h2>
                <div className='pt-2.5 border-b border-dashed border-[#B3B1B7]'></div>
            </div>
            <div className="flex justify-between items-center mb-4 px-2">
                <button
                    onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                    className="text-gray-400 hover:text-gray-600"
                >
                   <FaLongArrowAltLeft />
                </button>
               
                <button
                    onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                    className="text-orange-400 hover:text-orange-600"
                >
                  <FaLongArrowAltRight />
                </button>
            </div>
        </>
    );

    const renderDays = () => {
        const days = [];
        const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        weekDays.forEach((day, index) => {
            days.push(
                <div className="text-gray-500 w-10 h-10 flex items-center justify-center mx-0.5" key={index}>
                    {day}
                </div>
            );
        });
        return <div className="flex">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = '';

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, 'd');
                const cloneDay = day;
                days.push(
                    <div
                        className={`w-10 h-10 flex items-center justify-center m-[1px] cursor-pointer
              ${!isSameMonth(day, monthStart) ? 'text-gray-300' : ''}
              ${isSameDay(day, selectedDate) ? 'bg-[#FF6231] text-white' : 'bg-[#E6EBFC] text-gray-800'}
              hover:bg-orange-200`}
                        key={day}
                        onClick={() => setSelectedDate(cloneDay)}
                    >
                        <span>{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="flex" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div>{rows}</div>;
    };

    return (
        <div className="w-full mx-auto bg-white shadow-lg rounded-lg">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
};

export default Calendar;
