import Dashboard from "@/components/Dashboard";

export default function NoticesPage() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">공지사항</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">새 공지 작성</button>
            </div>
            <div className="flex gap-2">
              <select className="border rounded px-3 py-2">
                <option>전체</option>
                <option>중요</option>
                <option>일반</option>
              </select>
              <input 
                type="text" 
                placeholder="검색어 입력" 
                className="border rounded px-3 py-2"
              />
              <button className="bg-gray-200 px-4 py-2 rounded">검색</button>
            </div>
          </div>
          
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left w-16">번호</th>
                <th className="border p-2 text-left">제목</th>
                <th className="border p-2 text-left w-32">작성자</th>
                <th className="border p-2 text-left w-32">작성일</th>
                <th className="border p-2 text-left w-24">조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-yellow-50">
                <td className="border p-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                    중요
                  </span>
                </td>
                <td className="border p-2 font-medium">시스템 정기 점검 안내 (6/15)</td>
                <td className="border p-2">관리자</td>
                <td className="border p-2">2023-06-10</td>
                <td className="border p-2">245</td>
              </tr>
              {Array.from({ length: 5 }, (_, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border p-2">{10 - i}</td>
                  <td className="border p-2">공지사항 제목 예시입니다 {i + 1}</td>
                  <td className="border p-2">관리자</td>
                  <td className="border p-2">2023-06-{10 - i}</td>
                  <td className="border p-2">{Math.floor(Math.random() * 200)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="flex justify-center mt-6">
            <nav className="flex gap-1">
              <a href="#" className="px-3 py-1 border rounded hover:bg-gray-100">이전</a>
              <a href="#" className="px-3 py-1 border rounded bg-blue-600 text-white">1</a>
              <a href="#" className="px-3 py-1 border rounded hover:bg-gray-100">2</a>
              <a href="#" className="px-3 py-1 border rounded hover:bg-gray-100">3</a>
              <a href="#" className="px-3 py-1 border rounded hover:bg-gray-100">4</a>
              <a href="#" className="px-3 py-1 border rounded hover:bg-gray-100">5</a>
              <a href="#" className="px-3 py-1 border rounded hover:bg-gray-100">다음</a>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
} 