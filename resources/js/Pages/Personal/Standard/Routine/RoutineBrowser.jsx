import Authenticated from "@/Layouts/AuthenticatedLayout";
import SearchHeader from "@/Components/Personal/SearchHeader/SearchHeader";
import RoutineCardGroup from "@/Components/Personal/Routine/RoutineCardGroup";
import RoutineFilters from "@/Components/Personal/Routine/RoutineFilters";
import { useState } from "react";

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
            <RoutineFilters setFiltroKeyword={setFiltroKeyword}
            setFiltroOrden={setFiltroOrden} />
            <RoutineCardGroup routines={routines}
            filtroKeyword={filtroKeyword}
            filtroOrden={filtroOrden}/>
        </Authenticated>
    );
}