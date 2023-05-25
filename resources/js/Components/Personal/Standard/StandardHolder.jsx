import StandardFilters from "@/Components/Personal/Standard/StandardFilters";
import StandardCardGroup from "@/Components/Personal/Standard/StandardCardGroup";
import { useState } from "react";

export default function StandardHolder( { exercises } ) {
    const [filtroKeyword, setFiltroKeyword] = useState('');
    const [filtroZonaEscogida, setFiltroZonaEscogida] = useState('');
    const [filtroDificultad, setFiltroDificultad] = useState('');

    return (
        <>
            <StandardFilters exercises={exercises}
                setFiltroKeyword={setFiltroKeyword}
                setFiltroZonaEscogida={setFiltroZonaEscogida}
                setFiltroDificultad={setFiltroDificultad}
            />
            <StandardCardGroup exercises={ exercises }
                filtroKeyword={filtroKeyword}
                filtroZonaEscogida={filtroZonaEscogida}
                filtroDificultad={filtroDificultad}
            />
        </>
    );
}