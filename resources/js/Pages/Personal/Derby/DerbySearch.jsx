import Authenticated from "@/Layouts/AuthenticatedLayout";
import SearchHeader from "@/Components/Personal/SearchHeader/SearchHeader";
import DerbyHolder from "@/Components/Personal/Derby/DerbyHolder";
import { Head } from "@inertiajs/react";

/**
 * 
 * Página de búsqueda y gestión de ejercicios derby.
 * 
 */
export default function DerbySearch( { auth, exercises }) {
    console.log(auth)
    return (
        <Authenticated
            user={ auth.user }
        >
        <Head title="Búsqueda" />
        <SearchHeader title="Ejercicios derby"/>
        <DerbyHolder exercises={exercises} user={auth.user} />
        </Authenticated>
    );
}