import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function RoutineBrowser( { auth }) {
    return (
        <Authenticated
            user={ auth.user }
        >
        <div>
            <p>Rutinas</p>
        </div>
        </Authenticated>
    );
}