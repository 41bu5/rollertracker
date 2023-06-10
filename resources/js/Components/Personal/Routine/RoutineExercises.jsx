import Modal from "@/Components/Modal";
import RoutineStandardCard from "@/Components/Personal/Routine/RoutineStandardCard";
import StandardModal from "@/Components/Personal/Standard/StandardModal";
import { useState } from "react";

export default function RoutineExercises({ routineExercises }) {
    const [showModal, setShowModal] = useState(false);
    const [ejercicioModal, setEjercicioModal] = useState(null);

    return (
        <>
        <div className="bg-zinc-200 w-screen text-center pt-2 pl-48 pr-48">
            {
                routineExercises.map(
                    (exercise, index) => {
                        console.log(exercise);
                        return <RoutineStandardCard key={index} orden={index} exercise={exercise[0][0]} repeticiones={exercise[1]} setShowModal={setShowModal} setEjercicioModal={setEjercicioModal} />
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