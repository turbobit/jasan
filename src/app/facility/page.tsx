import Dashboard from "@/components/Dashboard";

export default function FacilityPage() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">시설 개요</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">시설 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">기본 정보</h3>
              <ul className="space-y-2">
                <li><span className="font-medium">시설명:</span> 자산 관리 센터</li>
                <li><span className="font-medium">위치:</span> 서울시 강남구</li>
                <li><span className="font-medium">면적:</span> 2,500㎡</li>
                <li><span className="font-medium">준공일:</span> 2020년 5월 15일</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">시설 담당자</h3>
              <ul className="space-y-2">
                <li><span className="font-medium">관리자:</span> 홍길동</li>
                <li><span className="font-medium">연락처:</span> 010-1234-5678</li>
                <li><span className="font-medium">이메일:</span> admin@example.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">층별 안내</h2>
            <ul className="space-y-3">
              <li className="border-b pb-2">
                <div className="font-medium">1층</div>
                <div className="text-sm text-gray-600">로비, 안내데스크, 회의실</div>
              </li>
              <li className="border-b pb-2">
                <div className="font-medium">2층</div>
                <div className="text-sm text-gray-600">사무실, 휴게공간</div>
              </li>
              <li className="border-b pb-2">
                <div className="font-medium">3층</div>
                <div className="text-sm text-gray-600">서버실, 관제센터</div>
              </li>
              <li>
                <div className="font-medium">지하 1층</div>
                <div className="text-sm text-gray-600">주차장, 창고</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">주요 설비</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full text-xs">설비</span>
                <div>냉난방 시스템</div>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full text-xs">설비</span>
                <div>소방 설비</div>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full text-xs">설비</span>
                <div>전력 시스템</div>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full text-xs">설비</span>
                <div>보안 시스템</div>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 p-1 rounded-full text-xs">설비</span>
                <div>네트워크 인프라</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">시설 이용 안내</h2>
            <ul className="space-y-3">
              <li className="border-b pb-2">
                <div className="font-medium">운영 시간</div>
                <div className="text-sm text-gray-600">평일 09:00 - 18:00</div>
              </li>
              <li className="border-b pb-2">
                <div className="font-medium">주차 안내</div>
                <div className="text-sm text-gray-600">지하 1층, 50대 수용</div>
              </li>
              <li className="border-b pb-2">
                <div className="font-medium">회의실 예약</div>
                <div className="text-sm text-gray-600">인트라넷 예약 시스템 이용</div>
              </li>
              <li>
                <div className="font-medium">출입 카드</div>
                <div className="text-sm text-gray-600">1층 안내데스크에서 발급</div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 