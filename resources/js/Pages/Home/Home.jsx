import HomeContainer from '@/Components/Home/HomeContainer.jsx';
import { Head } from '@inertiajs/react';
import './Home.css'

export default function Home({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Home" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-zinc-300 min-w-screen">

                {/* PÁGINA */}
                <div id="principal" className="w-full h-full text-center">
                    <h1 className='text-purple-900 font-bold text-9xl mb-3'>RollerTracker</h1>
                    <HomeContainer />
                </div>
            </div>
        </>
    );
}
