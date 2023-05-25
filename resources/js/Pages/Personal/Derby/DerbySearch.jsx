import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function DerbySearch({ auth }) {
    return (
        <Authenticated
            user={auth.user}
        >
            <p>Derby</p>
        </Authenticated>
    );
}