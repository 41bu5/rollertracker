import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function StandardPanel({ auth, exercises }) {
    return (
        <Authenticated
            user={auth.user}
        >
            <p>Estándar</p>
        </Authenticated>
    )
}