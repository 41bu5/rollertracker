import Modal from "@/Components/Modal";
import StandardModal from "@/Components/Personal/Standard/StandardModal";
import { useState } from "react";

export default function RoutineExercises({ routineExercises }) {
    const [showModal, setShowModal] = useState(false);
    const [ejercicioModal, setEjercicioModal] = useState(null);

    return (
        <>
        <div className="bg-zinc-200 w-screen text-center flex flex-wrap pt-2">
            {
                routineExercises.map(
                    (exercise, index) => {
                        console.log(exercise);
                        return <StandardCard key={index} exercise={exercise} setShowModal={setShowModal} setEjercicioModal={setEjercicioModal} />
                    }
                )
            }
        </div>
        <Modal show={showModal} onClose={() => setShowModal(false)}>
                <StandardModal ejercicioModal={ejercicioModal} />
        </Modal>
        </>
    );
}