import Authenticated from "@/Layouts/AuthenticatedLayout";
import SearchHeader from "@/Components/Personal/SearchHeader/SearchHeader";
import RoutineHolder from "@/Components/Personal/Routine/RoutineHolder";

export default function RoutineBrowser( { auth, routines }) {
    return (
        <Authenticated
            user={ auth.user }
        >
            <SearchHeader title="Tus rutinas"/>
            <RoutineHolder routines={routines} />
        </Authenticated>
    );
}