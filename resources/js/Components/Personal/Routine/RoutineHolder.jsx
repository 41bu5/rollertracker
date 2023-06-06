export default function RoutineHolder({ routines }) {
    console.log(routines);
    return (
        <>
            {
                routines.map(
                    (routine, index) => {
                        return <p key={index}>{routine.title}</p>
                    }
                )
            }
        </>
    )
}