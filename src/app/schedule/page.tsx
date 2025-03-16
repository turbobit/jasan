import Dashboard from "@/components/Dashboard";

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">스케줄 달력</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
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
            {Array.from({ length: 31 }, (_, i) => (
              <div key={i} className="h-24 border p-2 rounded">
                <div className="font-bold">{i + 1}</div>
                {i % 5 === 0 && (
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