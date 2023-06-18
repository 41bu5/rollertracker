import Modal from "@/Components/Modal";
import RoutineStandardCard from "@/Components/Personal/Routine/RoutineStandardCard";
import StandardModal from "@/Components/Personal/Standard/StandardModal";
import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function RoutineExercises({ routineExercises }) {
    const [showModal, setShowModal] = useState(false);
    const [ejercicioModal, setEjercicioModal] = useState(routineExercises[0][0][0]);

    return (
        <div className="flex flex-col justify-center items-center bg-zinc-200">
            <div className="inline-block m-5 p-1">
                <Link href="/espacio-personal/standard/rutinas" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl m-5">{'<< Volver'}</Link>
            </div>
            <div className="bg-zinc-200 w-screen text-center  pl-48 pr-48">
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
        </div>
    );
}