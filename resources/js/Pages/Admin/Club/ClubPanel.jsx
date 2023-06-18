import Authenticated from "@/Layouts/AuthenticatedLayout";
import ClubPanelTable from "@/Components/Admin/Club/ClubPanelTable";
import Modal from "@/Components/Modal";
import ClubLogoView from "@/Components/Admin/Club/ClubLogoView";
import EditClubModal from "@/Components/Admin/Club/EditClubModal";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import DeleteConfirmationModal from "@/Components/Admin/Club/DeleteConfirmationModal";

export default function ClubPanel({ auth, clubs }) {
    const [logoModal, setLogoModal] = useState(null);
    const [showModalLogo, setShowModalLogo] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [clubEdit, setClubEdit] = useState(null);

    if (deleteConfirmation) {
        fetch(`/admin/clubs/${deleteId}`, {
          method: 'DELETE',
          headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
          }
        })
          .then(function(response) {
            if (response.ok) {
              location.reload();
            } else {
              throw new Error('Request failed with status: ' + response.status);
            }
          })
          .catch(function(error) {
            console.error(error);
          });
      }      

    return (
        <Authenticated
            user={auth.user}
        >
            <Head title="Administrar clubes" />
            <div className="text-center">
                <h1 className="text-6xl text-zinc-900 p-10">Administración de clubes</h1>
                <Link href='/admin/clubs/create' className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">Añadir un club</Link>
            </div>
            <ClubPanelTable clubs={clubs}
            setLogoModal={setLogoModal}
            setShowModalLogo={setShowModalLogo}
            setShowModalEdit={setShowModalEdit}
            setClubEdit={setClubEdit}
            setDeleteId={setDeleteId}
            setShowModalDelete={setShowModalDelete} />
            <Modal show={showModalLogo}>
                <ClubLogoView logoModal={logoModal} setShowModalLogo={setShowModalLogo} />
            </Modal>
            <Modal show={showModalEdit}>
                <EditClubModal club={clubEdit} setShowModalEdit={setShowModalEdit} />
            </Modal>
            <Modal show={showModalDelete}>
                <DeleteConfirmationModal setShowModalDelete={setShowModalDelete} setDeleteConfirmation={setDeleteConfirmation}/>
            </Modal>
        </Authenticated>
    )
}