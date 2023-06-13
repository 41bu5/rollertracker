import Authenticated from "@/Layouts/AuthenticatedLayout";
import ClubPanelTable from "@/Components/Admin/Club/ClubPanelTable";
import { Head, Link } from "@inertiajs/react";

export default function ClubPanel({ auth, clubs }) {
    return (
        <Authenticated
            user={auth.user}
        >
            <Head title="Administrar clubes" />
            <div className="text-center">
                <h1 className="text-6xl text-zinc-900 p-10">Administración de clubes</h1>
                <Link href='/admin/clubs/create' className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">Añadir un club</Link>
            </div>
            <ClubPanelTable clubs={clubs} />
        </Authenticated>
    )
}