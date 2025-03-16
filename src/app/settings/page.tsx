import Dashboard from "@/components/Dashboard";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">설정</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold mb-4">계정 설정</h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium mb-1">이름</label>
              <input 
                type="text" 
                className="w-full border rounded px-3 py-2"
                defaultValue="관리자"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">이메일</label>
              <input 
                type="email" 
                className="w-full border rounded px-3 py-2"
                defaultValue="admin@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">비밀번호 변경</label>
              <input 
                type="password" 
                className="w-full border rounded px-3 py-2 mb-2"
                placeholder="현재 비밀번호"
              />
              <input 
                type="password" 
                className="w-full border rounded px-3 py-2 mb-2"
                placeholder="새 비밀번호"
              />
              <input 
                type="password" 
                className="w-full border rounded px-3 py-2"
                placeholder="새 비밀번호 확인"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              저장
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">알림 설정</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>이메일 알림</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>SMS 알림</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span>브라우저 알림</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">테마 설정</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">테마 모드</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="theme" className="mr-2" defaultChecked />
                    <span>라이트 모드</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="theme" className="mr-2" />
                    <span>다크 모드</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="theme" className="mr-2" />
                    <span>시스템 설정</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">언어</label>
                <select className="w-full border rounded px-3 py-2">
                  <option>한국어</option>
                  <option>English</option>
                  <option>日本語</option>
                  <option>中文</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">데이터 관리</h2>
            <div className="space-y-4">
              <button className="bg-gray-200 px-4 py-2 rounded w-full text-left">
                데이터 백업
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded w-full text-left">
                데이터 복원
              </button>
              <button className="bg-red-100 text-red-800 px-4 py-2 rounded w-full text-left">
                데이터 초기화
              </button>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">시스템 정보</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">버전</span>
                <span>v1.2.3</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">마지막 업데이트</span>
                <span>2023-06-01</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">라이센스</span>
                <span>Enterprise</span>
              </div>
              <div className="mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  업데이트 확인
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 