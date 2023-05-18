import { Link } from "@inertiajs/react";

export default function GuestNavbar() {
    return (
        <>
            <nav className="bg-purple-950 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="w-screen pl-10 pr-10 flex flex-wrap items-center justify-between p-4">
                    <Link href="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-zinc-200">RollerTracker</span>
                    </Link>
                    <div>
                        <Link href="/" className="flex md:order-2">
                            <button type="button" className="text-zinc-950 bg-zinc-300 hover:bg-zinc-400 focus:ring-1 focus:outline-none focus:ring-purple-600 font-medium rounded-lg text-lg px-4 py-2 text-center mr-3 md:mr-0">{'<< Menú principal'}</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}