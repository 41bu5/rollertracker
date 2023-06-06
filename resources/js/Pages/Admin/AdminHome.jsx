import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

/**
 * 
 * Página principal para el panel de administración, sólo visible por las cuentas de tipo administrador.
 * 
 */
export default function Admin({ auth }) {
    return (
        <Authenticated
            user={auth.user}
        >
            <Head title="Panel administrador" />

            <div className="flex flex-col w-full text-center justify-items-center">
                <Link href="admin/clubs" className="basis-1/4 w-full h-full bg-purple-200 p-10 m-2">
                    <p className="text-3xl text-zinc-900">Clubes</p>
                </Link>
                <Link href="admin/standard" className="basis-1/4 w-full h-full bg-purple-200 p-10 m-2">
                    <p className="text-3xl text-zinc-900">Ejercicios estándar</p>
                </Link>
                <Link href="admin/derby" className="basis-1/4 w-full h-full bg-purple-200 p-10 m-2">
                    <p className="text-3xl text-zinc-900">Ejercicios derby</p>
                </Link>
                <Link href="admin/users" className="basis-1/4 w-full h-full bg-purple-200 p-10 m-2">
                    <p className="text-3xl text-zinc-900">Usuarios</p>
                </Link>
            </div>
        </Authenticated>
    );
}