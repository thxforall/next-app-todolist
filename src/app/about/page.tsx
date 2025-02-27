'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                Todo App
              </Link>
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
        {/* Introduction Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Todo App 소개
              </h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                할 일 관리의 새로운 기준을 제시합니다
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              이렇게 사용하세요
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                  1
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  계정 만들기
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  이메일로 간단하게 가입하고 바로 시작하세요
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                  2
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  할 일 추가
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  직관적인 인터페이스로 할 일을 쉽게 추가하세요
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                  3
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  관리 및 완료
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  할 일을 체크하고 관리하며 생산성을 높이세요
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              서비스 특징
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  🎯 목표 달성
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  할 일을 체계적으로 관리하여 목표를 효과적으로 달성할 수 있습니다.
                  우선순위를 설정하고 진행 상황을 한눈에 파악하세요.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  🔄 실시간 동기화
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  모든 기기에서 실시간으로 할 일 목록이 동기화됩니다.
                  언제 어디서나 최신 상태를 확인하고 관리할 수 있습니다.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  🔒 보안
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  최신 보안 기술을 적용하여 사용자의 데이터를 안전하게 보호합니다.
                  개인정보 보호를 최우선으로 생각합니다.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  💡 직관적인 사용성
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  복잡한 설정 없이 바로 사용할 수 있는 직관적인 인터페이스를 제공합니다.
                  누구나 쉽게 시작할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              요금제
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="p-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">무료</h3>
                <p className="text-4xl font-bold mb-6">₩0</p>
                <ul className="text-left space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    무제한 할 일 추가
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    기본 필터 및 정렬
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    클라우드 동기화
                  </li>
                </ul>
                <Link
                  href="/register"
                  className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  무료로 시작하기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              자주 묻는 질문
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  서비스 이용료가 정말 무료인가요?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  네, 현재 모든 기능을 무료로 제공하고 있습니다. 추후 프리미엄 기능이 추가될 수 있지만,
                  기본적인 할 일 관리 기능은 계속해서 무료로 제공될 예정입니다.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  데이터는 안전한가요?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  최신 보안 기술을 적용하여 사용자의 데이터를 안전하게 보호하고 있습니다.
                  정기적인 백업과 암호화를 통해 데이터 손실 및 유출을 방지합니다.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  모바일에서도 사용할 수 있나요?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  반응형 웹 디자인을 적용하여 모바일 환경에서도 최적화된 경험을 제공합니다.
                  별도의 앱 설치 없이 브라우저에서 바로 이용할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              지금 바로 시작하세요
            </h2>
            <Link
              href="/register"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              무료로 시작하기
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
} 