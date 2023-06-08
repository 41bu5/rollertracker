import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

/**
 * 
 * Página principal para la gestión de ejercicios estándar, accesible por usuarios logeados.
 */
export default function StandardHome({ auth }) {
    return (
        <Authenticated
            user={auth.user}
        >
        <Head title="Ejercicios estándar" />
            <div className="flex justify-around w-full p-10 pt-0 pb-0 h-50 text-center text-zinc-50">
                {/* Link a la página de ejercicios estándar */}
                <Link href='/espacio-personal/standard/busqueda' className="basis-1/2 rounded aspect-square bg-purple-500 flex flex-col justify-center items-center flex-wrap m-24">
                    <svg className="w-60 "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    <p className="text-4xl font-bold mt-5">Buscar ejercicios</p>
                </Link>
                {/* Link a la página de rutinas */}
                <Link href="/espacio-personal/standard/rutinas" className="basis-1/2 rounded aspect-square bg-purple-500 flex flex-col justify-center items-center flex-wrap m-24">
                    <svg className="w-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
                    <p className="text-4xl font-bold mt-5">Gestión de rutinas</p>
                </Link>
            </div>
        </Authenticated>
    );
}