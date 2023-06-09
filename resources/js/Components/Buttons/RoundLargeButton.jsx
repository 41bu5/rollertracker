import { Link } from '@inertiajs/react';

export function RoundLargeButton(props) {
    return (
        <div className="flex flex-col justify-between m-14 mb-0 pb-5">
            <Link href={props.page}>
            <button className='bg-purple-400 hover:bg-purple-500 text-white font-bold
            xl:p-38
            lg:p-36
            md:p-36
            sm:p-20
            p-14
            rounded-full align-center aspect-square'>
            <div>{props.icon}</div>
            </button>
            </Link>
            <p className='text-neutral-800 text-3xl mt-3'>{props.text}</p>
        </div>
    )
}