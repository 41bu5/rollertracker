import Authenticated from "@/Layouts/AuthenticatedLayout";
import SearchHeader from "@/Components/Personal/SearchHeader/SearchHeader";
import StandardHolder from "@/Components/Personal/Standard/StandardHolder";

export default function StandardSearch( { auth, exercises }) {
    return (
        <Authenticated
            user={ auth.user }
        >
        <SearchHeader title="Ejercicios estándar"/>
        <StandardHolder exercises={exercises} />
        </Authenticated>
    );
}