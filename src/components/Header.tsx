'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useTodo } from '@/contexts/TodoContext';
import { useAuth } from '@/contexts/AuthContext';

export default function Header() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { filter, setFilter } = useTodo();
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="h-14 flex items-center justify-between">
          <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">Todo App</h1>
          {session?.user && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {session.user.email}
              </span>
              <button
                onClick={logout}
                className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 
                         text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 
                         hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                로그아웃
              </button>
            </div>
          )}
        </div>
        {isHome && session?.user && (
          <nav className="h-12 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">상태:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setFilter('')}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                    filter === '' 
                      ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400' 
                      : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  전체
                </button>
                <button
                  onClick={() => setFilter('false')}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                    filter === 'false'
                      ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400'
                      : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  미완료
                </button>
                <button
                  onClick={() => setFilter('true')}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                    filter === 'true'
                      ? 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400'
                      : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  완료
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">정렬:</span>
              <button 
                className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-700 
                         text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 
                         hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                최신순
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 