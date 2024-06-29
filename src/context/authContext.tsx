import React, { createContext, useReducer, ReactNode } from 'react';
import { passwordReducer } from '@/reducer/password-reducer';

interface ContextProps {
  state: { isAuthenticated: boolean; message: string };
  dispatch: React.Dispatch<any>;
}

const initialState = {
  isAuthenticated: false,
  message: ''
}; 

export const Context = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(passwordReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
