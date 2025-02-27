import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from '@/components/Providers';
import { TodoProvider } from '@/contexts/TodoContext';
import { AuthProvider } from '@/contexts/AuthContext';
import ClientProviders from '@/components/ClientProviders';
import SessionCheck from '@/components/SessionCheck';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900`}>
        <ClientProviders>
          <SessionCheck />
          <Providers>
            <AuthProvider>
              <TodoProvider>
                {children}
              </TodoProvider>
            </AuthProvider>
          </Providers>
        </ClientProviders>
      </body>
    </html>
  );
}
