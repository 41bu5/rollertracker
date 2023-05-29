import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function DerbyPanel({ auth, exercises }) {
    return (
        <Authenticated
            user={auth.user}
        >
            <p>Derby</p>
        </Authenticated>
    )
}