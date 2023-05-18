import LogoContainer from '@/Components/LogoContainer/LogoContainer';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-3 sm:pt-0 bg-zinc-300">
            <div>
                <Link className='block aspect-[4/3] w-60' href="/">
                    <LogoContainer />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-zinc-100 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
