'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function TestSession() {
  const [email, setEmail] = useState('test1@test.com');
  const [password, setPassword] = useState('test1234');
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  
  const { data: session, status, update } = useSession();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleLogin = async () => {
    try {
      setError(null);
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      });
      
      console.log('로그인 결과:', result);
      
      if (result?.error) {
        setError(result.error);
      } else {
        // 세션 수동 갱신
        await update();
      }
    } catch (err) {
      console.error('로그인 오류:', err);
      setError('로그인 중 오류가 발생했습니다');
    }
  };
  
  if (!mounted) {
    return <p>로딩 중...</p>;
  }
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>세션 테스트 페이지</h1>
      <p><strong>상태:</strong> {status}</p>
      <p><strong>세션:</strong> {session ? 'O' : 'X'}</p>
      
      {session && (
        <div>
          <pre style={{ 
            background: '#f0f0f0', 
            padding: '10px', 
            borderRadius: '4px', 
            marginTop: '10px',
            overflow: 'auto' 
          }}>
            {JSON.stringify(session, null, 2)}
          </pre>
          
          <button 
            onClick={() => signOut({ redirect: false })}
            style={{ 
              backgroundColor: '#f44336',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '4px',
              margin: '10px 0',
              cursor: 'pointer'
            }}
          >
            로그아웃
          </button>
        </div>
      )}
      
      {!session && (
        <div style={{ marginTop: '20px' }}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>이메일:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>비밀번호:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          
          <button 
            onClick={handleLogin}
            style={{ 
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            로그인
          </button>
        </div>
      )}
      
      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
      )}
    </div>
  );
} 