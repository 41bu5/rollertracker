import DerbyCardGroup from "@/Components/Personal/Derby/DerbyCardGroup";
import Modal from "@/Components/Modal";
import DerbyModal from "@/Components/Personal/Derby/DerbyModal";
import { useState, useEffect } from "react";

export default function StandardHolder({ exercises, user }) {
    const [showModal, setShowModal] = useState(false);
    const [ejercicioModal, setEjercicioModal] = useState(exercises[0]);

    return (
        <>
            <DerbyCardGroup exercises={exercises}
                setShowModal={setShowModal}
                setEjercicioModal={setEjercicioModal}
            />
            <Modal show={showModal}>
                <DerbyModal exercise={ejercicioModal}
                    setShowModal={setShowModal}/>
            </Modal>
        </>
    );
}