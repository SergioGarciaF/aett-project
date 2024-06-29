'use client';

import SideNav from '@/components/ui/dashboard/Sidenav';
import { Anton } from 'next/font/google';
import React, { ReactNode } from 'react';
import AuthDashboard from '@/components/auth-dashboard';
import { AuthProvider, Context } from '@/context/authContext';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang='es'>
      <head />
      <body>
        <AuthProvider>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-primary">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className={`${anton.className} antialiased flex-grow p-6 md:overflow-y-auto md:p-12`}>
              <Context.Consumer>
                {({ state }) => (
                  !state.isAuthenticated ? <AuthDashboard /> : children
                )}
              </Context.Consumer>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
