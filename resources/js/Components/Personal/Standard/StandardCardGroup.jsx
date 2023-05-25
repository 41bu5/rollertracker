import StandardCard from "@/Components/Personal/Standard/StandardCard";
import { useEffect, useState } from "react";

export default function StandardCardGroup( { exercises, filtroKeyword, filtroZonaEscogida, filtroDificultad }) {
    const [ejerciciosEscogidos, setEjerciciosEscogidos] = useState(exercises)

    useEffect(() => {
        var nuevosEjercicios = exercises;
        if (filtroZonaEscogida != 'all')
            nuevosEjercicios.filter(exercise => exercise['category'] == filtroZonaEscogida);
        if (filtroDificultad != 'all')
            nuevosEjercicios = nuevosEjercicios.filter(exercise => exercise['category'] == filtroZonaEscogida);
        if (filtroKeyword != '' && filtroKeyword != ' ' && filtroKeyword)
            nuevosEjercicios = nuevosEjercicios.filter(exercise => exercise['name']);
        setEjerciciosEscogidos(nuevosEjercicios);
    }, [filtroKeyword, filtroZonaEscogida, filtroDificultad])

    return (
        <div className="bg-zinc-200 w-full text-center flex flex-wrap">
            {
                ejerciciosEscogidos.map(
                    (exercise) => {
                        return <StandardCard exercise={exercise} />
                    }
                )
            }
        </div>
    );
}