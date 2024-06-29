"use client";
import React, { useContext, useState } from 'react';
import { Button } from './ui/button';
import { Context } from '@/context/authContext';

const AuthDashboard = () => {
    const password = process.env.NEXT_PUBLIC_DB_PASSWORD;
    const { state, dispatch } = useContext(Context);
    const [userPassword, setUserPassword] = useState('');

    //Control de login en dashboard
    const handleLogin = () => {
        if (userPassword === '') {
            dispatch({ type: 'EMPTY_INPUT' });
        } else if (userPassword === password) { 
            dispatch({ type: 'CORRECT_PASSWORD' });
        } else {
            dispatch({ type: 'INCORRECT_PASSWORD' });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl mb-4 text-center text-secondary">AETT DASHBOARD</h2>
                <input
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 mb-4 w-full text-primary"
                    placeholder="Contraseña"
                />
                <Button
                    onClick={handleLogin}
                    className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary-dark"
                >
                    Iniciar sesión
                </Button>
                {state.message && (
                    <p className={`mt-2 ${state.isAuthenticated ? 'text-green-500' : 'text-red-500'}`}>
                        {state.message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthDashboard;
