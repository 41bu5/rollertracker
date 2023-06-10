import { useState, useEffect } from "react";
import RoutineCard from "@/Components/Personal/Routine/RoutineCard";

export default function RoutineCardGroup({ routines, filtroKeyword, filtroOrden }) {
    const [rutinasFiltradas, setRutinasFiltradas] = useState(routines);

    useEffect(() => {
        let newRutinas = 
        filtroKeyword == '' || filtroKeyword == ' ' || filtroKeyword == null || filtroKeyword == undefined ?
        routines
        : 
        routines.filter(
            routine => ((routine.title).toLowerCase()).includes(filtroKeyword.toLowerCase())
        );
        newRutinas = reordenarRutinas(rutinasFiltradas, filtroOrden);
        setRutinasFiltradas(newRutinas);
    }, [filtroKeyword, filtroOrden]);

    function reordenarRutinas(rutinasFiltrar, orden) {
        switch (orden) {
            case "alfa" : ordenAlfabetico(rutinasFiltrar);
            break;
            // case "created_asc" : ordenFechas(rutinasFiltrar, 'created', 'asc');
            // break;
            // case "created_desc" : ordenFechas(rutinasFiltrar, 'created', 'desc');
            // break;
            // case "modified_asc" : ordenFechas(rutinasFiltrar, 'modified', 'asc');
            // break;
            // case "modified_desc" : ordenFechas(rutinasFiltrar, 'modified', 'desc');
            // break;
            default : ordenAlfabetico(rutinasFiltrar);
        }
    }

    function ordenAlfabetico(rutinasFiltrar) {
        return rutinasFiltrar.sort((a, b) => a.title.localeCompare(b.title));
    }

    // function ordenFechas(rutinas, 'created')

    // const sortedActivities = activities.slice().sort((a, b) => b.date - a.date)
    return (
        <div className="bg-zinc-200 w-screen text-center flex flex-wrap pt-2">
            {
                routines != undefined ? (routines.map(
                    (routine, index) => {
                        return <RoutineCard key={index} routine={routine} />
                    }
                )) : (null)
            }
        </div>
    )
}