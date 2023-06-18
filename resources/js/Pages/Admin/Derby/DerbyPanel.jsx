import Authenticated from "@/Layouts/AuthenticatedLayout";
import DerbyPanelTable from "@/Components/Admin/Derby/DerbyPanelTable";
import Modal from "@/Components/Modal";
import EditExerciseModal from "@/Components/Admin/Derby/EditExerciseModal";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import DeleteConfirmationModal from "@/Components/Admin/Derby/DeleteConfirmationModal";

export default function DerbyPanel({ auth, exercises }) {
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [exerciseEdit, setExerciseEdit] = useState(null);

    if (deleteConfirmation) {
        fetch(`/admin/derby/${deleteId}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            }
        })
            .then(function (response) {
                if (response.ok) {
                    location.reload();
                } else {
                    throw new Error('Request failed with status: ' + response.status);
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }


    return (
        <Authenticated
            user={auth.user}
        >
            <Head title="Administrar ejercicios derby" />
            <div className="text-center">
                <h1 className="text-6xl text-zinc-900 p-10">Administración de skills derby</h1>
                <Link href='/admin/derby/create' className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">Añadir un ejercicio</Link>
            </div>
            <DerbyPanelTable exercises={exercises}
                setShowModalEdit={setShowModalEdit}
                setExerciseEdit={setExerciseEdit}
                setDeleteId={setDeleteId}
                setShowModalDelete={setShowModalDelete} />
            <Modal show={showModalEdit}>
                <EditExerciseModal exercise={exerciseEdit} setShowModalEdit={setShowModalEdit} />
            </Modal>
            <Modal show={showModalDelete}>
                <DeleteConfirmationModal setShowModalDelete={setShowModalDelete} setDeleteConfirmation={setDeleteConfirmation} />
            </Modal>
        </Authenticated>
    )
}