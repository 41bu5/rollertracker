import Authenticated from "@/Layouts/AuthenticatedLayout";
import UserPanelTable from "@/Components/Admin/User/UserPanelTable";
import Modal from "@/Components/Modal";
import EditUserModal from "@/Components/Admin/User/EditUserModal";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function UserPanel({ auth, users }) {
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [userEdit, setUserEdit] = useState(null);

    return (
        <Authenticated
            user={auth.user}
        >
            <Head title="Administrar usuarios" />
            <div className="text-center">
                <h1 className="text-6xl text-zinc-900 p-10">Administración de usuarios</h1>
                <Link href='/admin/users/create' className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">Crear usuario</Link>
            </div>
            <UserPanelTable users={users}
                setShowModalEdit={setShowModalEdit}
                setUserEdit={setUserEdit} />
            <Modal show={showModalEdit}>
                <EditUserModal user={userEdit} setShowModalEdit={setShowModalEdit} />
            </Modal>
        </Authenticated>
    )
}