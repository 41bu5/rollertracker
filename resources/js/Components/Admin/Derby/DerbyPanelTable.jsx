import DerbyPanelTableRow from "@/Components/Admin/Derby/DerbyPanelTableRow";

export default function DerbyPanelTable({ exercises, setShowModalEdit, setExerciseEdit, setDeleteId, setShowModalDelete }) {
    console.table(exercises);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen min-w-screen text-center p-10">
            <table className="table-fixed w-full">
                <thead className="bg-zinc-200">
                    <tr className="text-zinc-800 bold mb-2">
                        <th scope="col" className="p-5">Nombre</th>
                        <th scope="col" className="p-5">Descripción</th>
                        <th scope="col" className="p-5">Skill</th>
                        <th scope="col" className="p-5">Dificultad</th>
                        <th scope="col" className="p-5">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        exercises.map(
                            (exercise, index) => {
                                return <DerbyPanelTableRow
                                key={index} exercise={exercise}
                                setShowModalEdit={setShowModalEdit}
                                setExerciseEdit={setExerciseEdit}
                                setShowModalDelete={setShowModalDelete}
                                setDeleteId={setDeleteId} />
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}