import Image from "next/image";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Dashboard />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">메인 콘텐츠</h1>
        <p>여기에 페이지 내용이 표시됩니다.</p>
      </main>
    </div>
  );
}
