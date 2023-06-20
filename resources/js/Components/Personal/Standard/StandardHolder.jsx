import StandardFilters from "@/Components/Personal/Standard/StandardFilters";
import StandardCardGroup from "@/Components/Personal/Standard/StandardCardGroup";
import Modal from "@/Components/Modal";
import StandardModal from "@/Components/Personal/Standard/StandardModal";
import { useState, useMemo } from "react";

export default function StandardHolder({ exercises, user }) {
    const [filtroKeyword, setFiltroKeyword] = useState('');
    const [filtroZonaEscogida, setFiltroZonaEscogida] = useState('all');
    const [filtroDificultad, setFiltroDificultad] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [ejercicioModal, setEjercicioModal] = useState(exercises[0]);
    const [rutinasEjercicioModal, setRutinasEjercicioModal] = useState(null);

    console.log(exercises[0]);
    console.log(user);
    useMemo(() => {
        fetch(`/espacio-personal/standard/busqueda/routine-titles/${ejercicioModal.id}/${user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed with status: ' + response.status);
                }
            })
            .then(function (data) {
                console.log(data);
                setRutinasEjercicioModal(data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [ejercicioModal]);

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
                setEjercicioModal={setEjercicioModal}
            />
            <Modal show={showModal}>
                <StandardModal exercise={ejercicioModal}
                    setShowModal={setShowModal}
                    rutinasEjercicioModal={rutinasEjercicioModal} />
            </Modal>
        </>
    );
}