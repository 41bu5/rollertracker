import { Link } from '@inertiajs/react';

export function RoundLargeButton(props) {
    return (
        <div className="flex flex-col justify-between m-14">
            <Link href={props.page}>
            <button className='bg-purple-400 hover:bg-purple-500 text-white font-bold p-36 rounded-full align-center aspect-square'>
            <div>{props.icon}</div>
            </button>
            </Link>
            <p className='text-neutral-950 font-bold text-2xl mt-3'>{props.text}</p>
        </div>
    )
}