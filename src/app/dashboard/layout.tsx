'use client';

import SideNav from '@/components/ui/dashboard/Sidenav';
import { passwordReducer } from '@/reducer/password-reducer';
import { Anton } from 'next/font/google';
import React, { useReducer, createContext, ReactNode } from 'react';
import AuthDashboard from '@/components/auth-dashboard';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

interface ContextProps {
  state: { isAuthenticated: boolean; message: string };
  dispatch: React.Dispatch<any>;
}

// Crea y exporta el contexto
export const Context = createContext<ContextProps>({
  state: { isAuthenticated: false, message: '' },
  dispatch: () => null
});

const initialState = {
  isAuthenticated: false,
  message: ''
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [state, dispatch] = useReducer(passwordReducer, initialState);

  return (
    <html lang='es'>
      <head />
      <body>
        <Context.Provider value={{ state, dispatch }}>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-primary">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className={`${anton.className} antialiased flex-grow p-6 md:overflow-y-auto md:p-12`}>
              {!state.isAuthenticated ? <AuthDashboard /> : children}
            </div>
          </div>
        </Context.Provider>
      </body>
    </html>
  );
}
