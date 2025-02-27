'use client';

import { SessionProvider } from 'next-auth/react';
import { useState, useEffect, ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 클라이언트 사이드 렌더링이 준비될 때까지 아무것도 보여주지 않음
  if (!mounted) {
    return null;
  }

  return <SessionProvider>{children}</SessionProvider>;
} 