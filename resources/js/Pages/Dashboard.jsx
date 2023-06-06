import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

/**
 * 
 * Página principal de la aplicación para el usuario logeado.
 * 
 */
export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Espacio personal" />

            <div className="flex flex-col text-6xl text-zinc-100 h-screen ">
                <Link href="/espacio-personal/standard" className="rounded bg-purple-700 p-10 m-5 basis-2/5 h-2/5">
                    <p className='p-5'>Ejercicios estándar</p>
                    <p className='p-5 pt-0 text-3xl text-zinc-300'>Crea tus rutinas personalizadas con ejercicios categorizados por partes del cuerpo</p>
                </Link>
                <Link href="/espacio-personal/derby" className="rounded bg-purple-700 p-10 m-5 mb-0 basis-2/5 h-2/5">
                    <p className='p-5'>Ejercicios derby</p>
                    <p className='p-5 pt-0 text-3xl text-zinc-300'>Busca ideas para entrenar tus habilidades y registra tu nivel de dominio</p>
                </Link>
            </div>
        </AuthenticatedLayout>
    );
}
