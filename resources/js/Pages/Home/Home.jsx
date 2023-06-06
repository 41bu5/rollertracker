import HomeContainer from '@/Components/Home/HomeContainer.jsx';
import { Head } from '@inertiajs/react';
import './Home.css'
import LogoContainer from '@/Components/LogoContainer/LogoContainer';

/**
 * 
 * Página de inicio de la aplicación.
 * 
 */
export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-center bg-zinc-300 min-w-screen">

                {/* PÁGINA */}
                <div id="principal" className="w-full h-full text-center flex flex-col justify-center">
                    <div className='w-screen flex items-center justify-center'>
                        <div className='w-96 h-auto'>
                            <LogoContainer />
                        </div>
                    </div>
                    <HomeContainer />
                </div>
            </div>
        </>
    );
}
