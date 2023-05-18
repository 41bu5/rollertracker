import { useMemo, useState } from "react";
import ClubCard from "@/Components/ClubPage/ClubCard";

export default function ClubCardGroup({ clubs, filtroComunidad }) {
    const [clubesEscogidos, setClubesEscogidos] = useState(clubs);

    useMemo( () => {
        setClubesEscogidos(filtroComunidad == 'all'  ? clubs : filtrarClubs());
    }, [filtroComunidad])

    function filtrarClubs() {
        return clubs.filter(
            club => club['c_autonoma'] == filtroComunidad
        )
    }

    return (
        <div className="bg-zinc-200 w-full text-center flex flex-wrap">
            {
                clubesEscogidos.map(
                    (club) => {
                        return <ClubCard club={club} />
                    }
                )
            }
        </div>
    );
}