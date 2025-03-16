import Dashboard from "@/components/Dashboard";

export default function OperationsPage() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">운영/정비</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">시스템 상태</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>서버 상태</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  정상
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>데이터베이스</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  정상
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>백업 시스템</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                  점검 중
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>네트워크</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  정상
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">정비 일정</h2>
            <ul className="space-y-3">
              <li className="border-b pb-2">
                <div className="font-medium">서버 업데이트</div>
                <div className="text-sm text-gray-600">2023-06-15 02:00 AM</div>
              </li>
              <li className="border-b pb-2">
                <div className="font-medium">데이터베이스 최적화</div>
                <div className="text-sm text-gray-600">2023-06-20 01:00 AM</div>
              </li>
              <li className="border-b pb-2">
                <div className="font-medium">보안 패치 적용</div>
                <div className="text-sm text-gray-600">2023-06-25 03:00 AM</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">리소스 모니터링</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>CPU 사용량</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>메모리 사용량</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>디스크 사용량</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">최근 알림</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-red-100 text-red-800 p-1 rounded-full">!</span>
                <div>
                  <div className="font-medium">디스크 공간 부족 경고</div>
                  <div className="text-sm text-gray-600">2023-06-10 14:23</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-yellow-100 text-yellow-800 p-1 rounded-full">!</span>
                <div>
                  <div className="font-medium">백업 시스템 점검 필요</div>
                  <div className="text-sm text-gray-600">2023-06-09 09:15</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 text-green-800 p-1 rounded-full">✓</span>
                <div>
                  <div className="font-medium">시스템 업데이트 완료</div>
                  <div className="text-sm text-gray-600">2023-06-08 22:45</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 