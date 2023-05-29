import { Link } from "@inertiajs/react";
import LogoContainer from "@/Components/LogoContainer/LogoContainer";

export default function GuestNavbar() {
    return (
        <>
            <nav className="bg-purple-950 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="w-screen pl-10 pr-10 flex flex-wrap items-center justify-between p-4">
                    <Link href="/" className="flex items-center">
                        <div className="h-max w-20 mr-6">
                            <LogoContainer />
                        </div>
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-zinc-300">RollerTracker</span>
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