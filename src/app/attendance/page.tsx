import Dashboard from "@/components/Dashboard";

export default function AttendancePage() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">임실자 관리</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4 flex justify-between items-center">
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">출석 체크</button>
              <button className="bg-gray-200 px-4 py-2 rounded">필터</button>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="이름 검색" 
                className="border rounded px-3 py-2"
              />
              <button className="bg-gray-200 px-4 py-2 rounded">검색</button>
            </div>
          </div>
          
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">이름</th>
                <th className="border p-2 text-left">부서</th>
                <th className="border p-2 text-left">출석 상태</th>
                <th className="border p-2 text-left">입실 시간</th>
                <th className="border p-2 text-left">퇴실 시간</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }, (_, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border p-2">홍길동 {i + 1}</td>
                  <td className="border p-2">개발팀</td>
                  <td className="border p-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      출석
                    </span>
                  </td>
                  <td className="border p-2">09:00</td>
                  <td className="border p-2">18:00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
} 