import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Context } from '@/context/authContext';// Asegúrate de que la ruta es correcta

const Sidenav: React.FC = () => {
    const { state, dispatch } = useContext(Context); // Accede al estado del contexto
    const router = useRouter();

    // Acción de cerrar sesión
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        router.push('/dashboard'); // Redirige al dashboard de autenticación
    };

    // Redirigir si no está autenticado
    useEffect(() => {
        if (!state.isAuthenticated) {
            router.push('/dashboard'); // Redirige si no está autenticado
        }
    }, [state.isAuthenticated, router]);

    return (
        <div className="min-h-screen bg-primary text-secondary flex justify-center items-center">
            <div className='w-full'>
                <div id="body" className="h-screen flex">
                    <nav className="w-80 h-screen flex flex-col gap-10 border-r border-slate-100">
                        <div className="logo text-2xl text-center h-16 flex items-center justify-center">Dashboard</div>
                        <div className="user flex items-center justify-center flex-col gap-4 border-b border-emerald-slate-50 py-4">
                            <div className="flex flex-col items-center">
                                <span className="text-lg">Admin</span>
                            </div>
                        </div>
                        <ul className="px-6 space-y-2">
                            <li>
                                <Link className="block px-4 py-2.5 hover:bg-emerald-950 hover:text-white rounded-lg" href="/dashboard">Base de datos</Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-2.5 hover:bg-emerald-950 hover:text-white rounded-lg" href="/dashboard/add">Agregar</Link>
                            </li>
                            <Button
                                onClick={handleLogout}
                                className="border border-secondary hidden sm:flex items-center justify-between gap-2 sm:gap-7 hover:bg-secondary hover:text-primary cursor-pointer"
                            >
                                Cerrar sesión
                            </Button>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
