import StandardCard from "@/Components/Personal/Standard/StandardCard";
import { useEffect, useMemo, useState } from "react";

export default function StandardCardGroup( { exercises, filtroKeyword, filtroZonaEscogida, filtroDificultad, setShowModal }) {
    const [ejerciciosEscogidos, setEjerciciosEscogidos] = useState(exercises);

    useEffect(() => {
        let newExercises = exercises.filter(
            exercise => filtrarDificultad(exercise) && filtrarZona(exercise) && filtrarKeyword(exercise)
        );
        setEjerciciosEscogidos(newExercises);
    }, [filtroKeyword, filtroZonaEscogida, filtroDificultad])


    function filtrarDificultad(exercise) {
        if (filtroDificultad == 'all' || exercise['difficulty'] == filtroDificultad)
            return true;

        return false;
    }

    function filtrarZona(exercise) {
        if (filtroZonaEscogida == 'all' || exercise['category'] == filtroZonaEscogida)
            return true;

        return false;
    }

    function filtrarKeyword(exercise) {
        if (filtroKeyword == '' || filtroKeyword == null || filtroKeyword == ' ' || buscarKeyword(exercise))
            return true;

        return false;
    }

    function buscarKeyword(exercise) {
        let name = exercise['name'].toLowerCase();
        return name.includes(filtroKeyword.toLowerCase()) ? true : false;
    }


    return (
        <div className="bg-zinc-200 w-screen text-center flex flex-wrap pt-2">
            {
                ejerciciosEscogidos.map(
                    (exercise, index) => {
                        return <StandardCard key={index} exercise={exercise} setShowModal={setShowModal} />
                    }
                )
            }
        </div>
    );
}