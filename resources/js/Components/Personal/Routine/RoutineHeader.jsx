export default function RoutineHeader({ title, description, count }) {
    return (
        <div className="w-full bg-purple-500 text-zinc-100 pt-16 pb-16 flex">
            <div className="basis-4/6">
                <h1 className="text-6xl m-10 mb-5">{title}</h1>
                <h2 className="text-3xl m-10 mt-0 text-zinc-200">{description}</h2>
            </div>
            <div className="basis-2/6 flex items-center justify-center text-3xl m-10 mt-0 text-zinc-200">
                {count + ' ejercicios'}
            </div>
        </div>
    );
}