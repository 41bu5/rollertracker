import Authenticated from "@/Layouts/AuthenticatedLayout";
import SearchHeader from "@/Components/Personal/SearchHeader/SearchHeader";
import RoutineCardGroup from "@/Components/Personal/Routine/RoutineCardGroup";
import RoutineFilters from "@/Components/Personal/Routine/RoutineFilters";
import { useState } from "react";
import { Link } from "@inertiajs/react";

/**
 * 
 * Página de gestión y búsqueda de rutinas del usuario. El usuario sólo ve las rutinas asociadas a su id.
 * 
 */
export default function RoutineBrowser( { auth, routines }) {
    const [filtroKeyword, setFiltroKeyword] = useState('');
    const [filtroOrden, setFiltroOrden] = useState('alfa');

    return (
        <Authenticated
            user={ auth.user }
        >
            <SearchHeader title="Tus rutinas"/>
            <div className="text-center p-5">
            <RoutineFilters setFiltroKeyword={setFiltroKeyword}
            setFiltroOrden={setFiltroOrden} />
            <Link href="/espacio-personal/standard/rutinas/create" className="bg-violet-500 hover:bg-violet-700 text-white font-semibold py-2 px-4 border border-transparent rounded text-2xl m-5">{'Crear rutina'}</Link>
            </div>
            <RoutineCardGroup routines={routines}
            filtroKeyword={filtroKeyword}
            filtroOrden={filtroOrden}/>
        </Authenticated>
    );
}