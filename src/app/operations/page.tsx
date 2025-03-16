import Dashboard from "@/components/Dashboard";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function OperationsPage() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-8">
        <div className="flex items-center mb-6">
          <h1 className="text-2xl font-bold">운영/정비</h1>
          <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">총 8건</span>
        </div>
        
        {/* 제공 서비스 섹션 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">제공서비스</h2>
            <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              <PlusIcon className="w-5 h-5 mr-1" />
              서비스 추가
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">항목</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">회사</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">월비용</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">시작일</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">종료일</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AS연락처</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">특이사항</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">인터넷</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">KT</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">55,000원</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-09-01</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-08-31</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1588-0112</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">기가인터넷</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button className="text-blue-500 hover:text-blue-700 mr-2">수정</button>
                      <button className="text-red-500 hover:text-red-700">삭제</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">정수기</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">코웨이</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">33,000원</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-10-15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-10-14</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1588-5200</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2층 공용공간</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button className="text-blue-500 hover:text-blue-700 mr-2">수정</button>
                      <button className="text-red-500 hover:text-red-700">삭제</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="text-sm text-gray-700">
                총 2건 중 1-2
              </div>
              <div className="flex-1 flex justify-end">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    이전
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-500 text-sm font-medium text-white hover:bg-blue-600">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    다음
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
        
        {/* 정비내역 섹션 */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">정비내역</h2>
              <div className="ml-4 flex space-x-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">접수 2건</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">처리중 3건</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">완료 3건</span>
              </div>
            </div>
            <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              <PlusIcon className="w-5 h-5 mr-1" />
              정비내역 추가
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">요청일</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">호실</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">입주자명</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">문제 내용</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">처리 예정일</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">접수</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-03-11</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">203호</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">김민수</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">화장실 수도꼭지 누수</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-03-13</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button className="text-blue-500 hover:text-blue-700 mr-2">상태 변경</button>
                      <button className="text-blue-500 hover:text-blue-700">처리 내역</button>
                    </td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">처리중</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-03-10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">405호</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">이지원</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">에어컨 작동 불량</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2025-03-12</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button className="text-blue-500 hover:text-blue-700 mr-2">상태 변경</button>
                      <button className="text-blue-500 hover:text-blue-700">처리 내역</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="text-sm text-gray-700">
                총 8건 중 1-2
              </div>
              <div className="flex-1 flex justify-end">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    이전
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-500 text-sm font-medium text-white hover:bg-blue-600">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    4
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    다음
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 