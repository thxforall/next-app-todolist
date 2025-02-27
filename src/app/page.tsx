'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import TodoList from '@/components/TodoList';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("세션 정보:", session);
  console.log("사용자 ID:", session?.user?.id);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-3.5rem)]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (status === 'authenticated' && session?.user) {
    // 세션 및 사용자 ID 확인
    const userId = session.user.id;
    
    if (!userId) {
      console.error("사용자 ID가 없습니다:", session.user);
      return <p>사용자 정보를 불러올 수 없습니다.</p>;
    }
    
    // ID가 숫자인지 문자열인지 확인 후 적절히 처리
    const numericUserId = typeof userId === 'string' ? parseInt(userId) : userId;
    
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <TodoList userId={numericUserId} />
        </div>
      </>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <header className="fixed top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Todo App</h1>
              </div>
              <div className="flex items-center gap-4">
                <Link 
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  로그인
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  시작하기
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-16">
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                  <span className="block">할 일 관리를</span>
                  <span className="block text-blue-500">더 쉽고 효율적으로</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  간단하고 직관적인 인터페이스로 당신의 할 일을 관리하세요.
                  언제 어디서나 접근 가능한 클라우드 기반 할 일 관리 서비스입니다.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                  <Link
                    href="/register"
                    className="px-8 py-3 text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors md:text-lg"
                  >
                    무료로 시작하기
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 md:text-lg"
                  >
                    더 알아보기
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-24 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  주요 기능
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  할 일 관리에 필요한 모든 기능을 제공합니다
                </p>
              </div>

              <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="relative p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-xl font-medium text-gray-900 dark:text-white text-center">
                    간편한 할 일 관리
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                    직관적인 인터페이스로 할 일을 쉽게 추가하고 관리할 수 있습니다
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="relative p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-xl font-medium text-gray-900 dark:text-white text-center">
                    실시간 동기화
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                    모든 기기에서 실시간으로 할 일 목록이 동기화됩니다
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="relative p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mt-8 text-xl font-medium text-gray-900 dark:text-white text-center">
                    안전한 데이터 관리
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                    클라우드에 안전하게 저장되어 데이터 손실 걱정이 없습니다
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <Header />
      <TodoList userId={parseInt(session.user.id)} />
    </>
  );
}
