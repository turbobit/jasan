"use client";

import Dashboard from "@/components/Dashboard";
import { useState, useEffect } from "react";

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysCount = new Date(year, month + 1, 0).getDate();
    setDaysInMonth(Array.from({ length: daysCount }, (_, i) => i + 1));
  }, [currentDate]);

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthNames = [
    "1월", "2월", "3월", "4월", "5월", "6월",
    "7월", "8월", "9월", "10월", "11월", "12월"
  ];

  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">스케줄 달력</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={goToPreviousMonth}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              이전달
            </button>
            <h2 className="text-xl font-bold">
              {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
            </h2>
            <button 
              onClick={goToNextMonth}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              다음달
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-4 text-center">
            <div className="font-bold text-red-500">일</div>
            <div className="font-bold">월</div>
            <div className="font-bold">화</div>
            <div className="font-bold">수</div>
            <div className="font-bold">목</div>
            <div className="font-bold">금</div>
            <div className="font-bold text-blue-500">토</div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {daysInMonth.map((day) => (
              <div key={day} className="h-24 border p-2 rounded">
                <div className="font-bold">{day}</div>
                {day % 5 === 0 && (
                  <div className="text-xs bg-blue-100 p-1 rounded mt-1">
                    일정 항목
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 