import ClubLocationSelectors from "@/Components/ClubPage/ClubLocationSelectors";
import ClubCardGroup from "@/Components/ClubPage/ClubCardGroup";
import { useState } from "react";

export default function CardHolder( { clubs } ) {
    const [filtroComunidad, setFiltroComunidad] = useState('all');

    return (
        <>
            <ClubLocationSelectors clubs={clubs} setFiltroComunidad={setFiltroComunidad} />
            <ClubCardGroup clubs={clubs} filtroComunidad={filtroComunidad}/>
        </>
    );
}