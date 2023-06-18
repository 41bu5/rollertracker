export default function StandardPanelTableRow({ exercise, setImageModal, setShowModalImage, setShowModalEdit, setExerciseEdit, setDeleteId, setShowModalDelete }) {
    console.log(exercise);
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.description}</td>
            <td>{exercise.category}</td>
            <td>{exercise.difficulty}</td>
            <td>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" onClick={() => {
                    setImageModal(exercise.image);
                    setShowModalImage(true);
                }}>Ver</button>
            </td>
            <td>
                <div className="inline-flex">
                <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" type="button" onClick={() => {
                    setExerciseEdit(exercise);
                    setShowModalEdit(true);
                }}>Editar</button>
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" type="button" onClick={() => {
                    setDeleteId(exercise.id);
                    setShowModalDelete(true);
                }}>Eliminar</button>
                </div>
            </td>
        </tr>
    );
}