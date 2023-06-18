import Authenticated from "@/Layouts/AuthenticatedLayout";
import SearchHeader from "@/Components/Personal/SearchHeader/SearchHeader";
import StandardHolder from "@/Components/Personal/Standard/StandardHolder";
import { Head } from "@inertiajs/react";

/**
 * 
 * Página de búsqueda y gestión de ejercicios estándar.
 * 
 */
export default function StandardSearch( { auth, exercises }) {
    console.log(auth)
    return (
        <Authenticated
            user={ auth.user }
        >
        <Head title="Búsqueda" />
        <SearchHeader title="Ejercicios estándar"/>
        <StandardHolder exercises={exercises} user={auth.user} />
        </Authenticated>
    );
}