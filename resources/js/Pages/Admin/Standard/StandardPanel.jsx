import Authenticated from "@/Layouts/AuthenticatedLayout";
import StandardPanelTable from "@/Components/Admin/Standard/StandardPanelTable";
import Modal from "@/Components/Modal";
import ExerciseImageView from "@/Components/Admin/Standard/ExerciseImageView";
import EditExerciseModal from "@/Components/Admin/Standard/EditExerciseModal";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import DeleteConfirmationModal from "@/Components/Admin/Standard/DeleteConfirmationModal";

export default function StandardPanel({ auth, exercises }) {
    const [imageModal, setImageModal] = useState(null);
    const [showModalImage, setShowModalImage] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [exerciseEdit, setExerciseEdit] = useState(null);

    if (deleteConfirmation) {
        fetch(`/admin/standard/${deleteId}`, {
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
            <Head title="Administrar ejercicios estándar" />
            <div className="text-center">
                <h1 className="text-6xl text-zinc-900 p-10">Administración de ejercicios estándar</h1>
                <Link href='/admin/standard/create' className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">Añadir un ejercicio</Link>
            </div>
            <StandardPanelTable exercises={exercises}
                setImageModal={setImageModal}
                setShowModalImage={setShowModalImage}
                setShowModalEdit={setShowModalEdit}
                setExerciseEdit={setExerciseEdit}
                setDeleteId={setDeleteId}
                setShowModalDelete={setShowModalDelete} />
            <Modal show={showModalImage}>
                <ExerciseImageView imageModal={imageModal} setShowModalImage={setShowModalImage} />
            </Modal>
            <Modal show={showModalEdit}>
                <EditExerciseModal exercise={exerciseEdit} setShowModalEdit={setShowModalEdit} />
            </Modal>
            <Modal show={showModalDelete}>
                <DeleteConfirmationModal setShowModalDelete={setShowModalDelete} setDeleteConfirmation={setDeleteConfirmation} />
            </Modal>
        </Authenticated>
    )
}