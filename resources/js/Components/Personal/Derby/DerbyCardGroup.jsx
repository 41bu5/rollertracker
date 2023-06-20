import DerbyCard from "@/Components/Personal/Derby/DerbyCard";

export default function DerbyCardGroup( { exercises, setShowModal, setEjercicioModal }) {
    return (
        <div className="bg-zinc-200 w-screen text-center flex flex-wrap pt-2">
            {
                exercises.map(
                    (exercise, index) => {
                        return <DerbyCard key={index} exercise={exercise} setShowModal={setShowModal} setEjercicioModal={setEjercicioModal} />
                    }
                )
            }
        </div>
    );
}