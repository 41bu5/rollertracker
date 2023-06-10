import { Link } from "@inertiajs/react";

export default function RoutineCard({ routine }) {
    return (
        <div className="basis-1/2 flex p-2">
            <div className="basis-3/4 flex flex-col bg-zinc-50">
                <div className="basis-1/2 p-2">
                    <p className="text-3xl bold text-gray-900 text-start pl-3">{(routine.title).toUpperCase()}</p>
                </div>
                <div className="basis-1/2 text-start p-1">
                    <p className="text-xl text-gray-700 text-start pl-4">
                    {routine.description.length > 100 ?
                    `${routine.description.substring(0, 250)}...` : routine.description
                    }</p>
                </div>
            </div>
            <Link href={'/espacio-personal/standard/rutinas/' + routine.id} className="basis-1/4 bg-gray-700 hover:bg-gray-900 hover:text-zinc-100 hover:text-xl flex items-center justify-center">
                <p type="button" className='text-zinc-50'>{'Ver más >>'}</p>
            </Link>
        </div>
    );
}