import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function UserPanel({ auth, users }) {
    return (
        <Authenticated
            user={auth.user}
        >
            <p>Usuarios</p>
        </Authenticated>
    )
}