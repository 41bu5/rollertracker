import { Link } from "@inertiajs/react";
export default function StandardModal({ exercise, setShowModal, rutinasEjercicioModal }) {


    return (
        <div className="bg-zinc-50 w-full h-full text-center p-5">
            <div className="flex justify-around items-center">
                <h3 className="text-4xl font-bold basis-1/2">{(exercise.name).toUpperCase()}</h3>
                <button type="button" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded m-4 text-xl" onClick={() => {
                    setShowModal(false);
                }}>Cerrar</button>
            </div>
            <div className="flex justify-around items-center">
                <div className="basis-1/2 p-5 pt-0">
                    <p className="text-lg text-start">{exercise.description}</p>
                </div>
                <div className="basis-1/2 h-auto w-full">
                    <img src={exercise.image} className="w-full h-auto" alt="" />
                </div>
            </div>
            <p className="text-2xl text-start mt-2">Rutinas que lo contienen:</p>
            <ul className="text-start">
            {
                rutinasEjercicioModal.map(
                    (rutina, index) => {
                        return <li key={index}>{rutina[0].title}<Link className="underlined text-gray-700" href={'/espacio-personal/standard/rutinas/'+rutina[0].id}>{'[ Ver >> ]'}</Link></li>
                    }
                )
            }
            </ul>
        </div>
    )
}