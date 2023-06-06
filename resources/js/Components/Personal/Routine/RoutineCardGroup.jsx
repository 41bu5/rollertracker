import { useState, useEffect } from "react";
// import * as ordenRutinas from './ordenRutinas';

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

    function reordenarRutinas(rutinas, orden) {
        switch (orden) {
            case "alfa" : ordenAlfabetico(rutinas);
            break;
            // case "created_asc" : ordenFechas(rutinas, 'created', 'asc');
            // break;
            // case "created_desc" : ordenFechas(rutinas, 'created', 'desc');
            // break;
            // case "modified_asc" : ordenFechas(rutinas, 'modified', 'asc');
            // break;
            // case "modified_desc" : ordenFechas(rutinas, 'modified', 'desc');
            // break;
            default : ordenAlfabetico(rutinas);
        }
    }

    function ordenAlfabetico(rutinas) {
        return rutinas.sort((a, b) => a.title.localeCompare(b.title));
    }

    // function ordenFechas(rutinas, 'created')

    // const sortedActivities = activities.slice().sort((a, b) => b.date - a.date)
    return (
        <>
            {
                routines != undefined ? (routines.map(
                    (routine, index) => {
                        return <p key={index}>{routine.title}</p>
                    }
                )) : (null)
            }
        </>
    )
}