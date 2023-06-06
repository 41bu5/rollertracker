import StandardFilters from "@/Components/Personal/Standard/StandardFilters";
import StandardCardGroup from "@/Components/Personal/Standard/StandardCardGroup";
import Modal from "@/Components/Modal";
import StandardModal from "@/Components/Personal/Standard/StandardModal";
import { useState, useEffect } from "react";

export default function StandardHolder( { exercises } ) {
    const [filtroKeyword, setFiltroKeyword] = useState('');
    const [filtroZonaEscogida, setFiltroZonaEscogida] = useState('all');
    const [filtroDificultad, setFiltroDificultad] = useState('all');
    const [showModal, setShowModal] = useState(false);

    /**
     * Pruebas que hice.
     */
    // useEffect(() => {
    //     console.log('Cambio de keyword a ' + filtroKeyword);
    // }, [filtroKeyword]);
    
    // useEffect(() => {
    //     console.log('Cambio de zona a ' + filtroZonaEscogida);
    // }, [filtroZonaEscogida]);
    
    // useEffect(() => {
    //     console.log('Cambio de dificultad a ' + filtroDificultad);
    // }, [filtroDificultad]);

    return (
        <>
            <StandardFilters exercises={exercises}
                setFiltroKeyword={setFiltroKeyword}
                setFiltroZonaEscogida={setFiltroZonaEscogida}
                setFiltroDificultad={setFiltroDificultad}
            />
            <StandardCardGroup exercises={exercises}
                filtroKeyword={filtroKeyword}
                filtroZonaEscogida={filtroZonaEscogida}
                filtroDificultad={filtroDificultad}
                setShowModal={setShowModal}
            />
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <StandardModal />
            </Modal>
        </>
    );
}