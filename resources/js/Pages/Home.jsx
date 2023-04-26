import HomeContainer from '@/Components/Home/HomeContainer.jsx';
import { Head } from '@inertiajs/react';

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-zinc-300 max-w-screen">
                {/* BARRA DE NAVEGACIÓN
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    
                </div> */}

                {/* PÁGINA */}
                <div className="max-w-screen text-center">
                    <h1 className='text-purple-900 font-bold text-9xl mb-3'>RollerTracker</h1>
                    <HomeContainer />
                </div>
            </div>
        </>
    );
}
