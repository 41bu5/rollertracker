import Authenticated from "@/Layouts/AuthenticatedLayout";
import ClubPanelTable from "@/Components/Admin/Club/ClubPanelTable";

export default function ClubPanel({ auth, clubs }) {
    return (
        <Authenticated
            user={auth.user}
        >
            <h1>Administración de clubes</h1>
            <ClubPanelTable clubs={clubs} />
        </Authenticated>
    )
}