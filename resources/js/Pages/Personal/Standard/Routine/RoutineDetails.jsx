import Authenticated from "@/Layouts/AuthenticatedLayout";
import RoutineHeader from "@/Components/Personal/Routine/RoutineHeader";
import RoutineExercises from "@/Components/Personal/Routine/RoutineExercises";

export default function RoutineDetails({auth, routine, routineExercises}) {
    console.table(routineExercises);
    return (
        <Authenticated
            user={ auth.user }
        >
        <RoutineHeader title={routine.title} description={routine.description} count={routineExercises.length}/>
        <RoutineExercises routineExercises={routineExercises} />
        </Authenticated>
    );
}