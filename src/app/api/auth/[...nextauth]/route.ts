import NextAuth from 'next-auth';
import { authOptions } from '@/app/api/auth';

// 활성화된 콘솔 로그
console.log('NextAuth API route initialized');
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
