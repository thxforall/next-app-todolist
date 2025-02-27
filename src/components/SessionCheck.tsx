'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function SessionCheck() {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log('===== 세션 체크 =====');
    console.log('Session status:', status);
    console.log('Session data:', session);
    
    // 쿠키 확인
    console.log('All cookies:', document.cookie);
  }, [session, status]);

  return null; // UI 렌더링 없음
} 