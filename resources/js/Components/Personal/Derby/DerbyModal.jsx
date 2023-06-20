export default function DerbyModal({ exercise, setShowModal }) {
    return (
        <div className="bg-zinc-50 w-full h-full text-center p-5">
            <div className="flex justify-around items-center">
                <h3 className="text-4xl font-bold basis-1/2">{(exercise.name).toUpperCase()}</h3>
                <button type="button" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded m-4 text-xl" onClick={() => {
                    setShowModal(false);
                }}>Cerrar</button>
            </div>

            <p className="text-lg w-full text-start">{exercise.description}</p>

        </div>
    )
}