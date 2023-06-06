import './StandardCard.css';

export default function StandardCard( { exercise, setShowModal }) {
    return (
        <div className="basis-1/2 flex p-2">
            <div className="basis-3/4 flex flex-col bg-zinc-50">
                <div className="basis-1/2 p-2">
                    <p className="text-3xl bold text-gray-900 text-start pl-3">{(exercise.name).toUpperCase()}</p>
                </div>
                <div className="basis-1/2 flex justify-center p-1">
                    <div className="basis-1/2 w-full flex p-1 text-start">
                        <div className="basis-1/6 text-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-8' viewBox="0 0 320 512"><path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z"/></svg>
                        </div>
                        <div className="basis-5/6">
                            <p className='text-xl text-start'>{exercise.category}</p>
                        </div>
                    </div>
                    <div className="basis-1/2 w-full flex p-1 text-start">
                        <div className="basis-1/6 text-end">
                            <svg xmlns="http://www.w3.org/2000/svg"  className='h-8' viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>
                        </div>
                        <div className="basis-5/6">
                            <p className='text-xl text-start'>{exercise.difficulty}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="basis-1/4 bg-gray-700 hover:bg-gray-900 hover:text-zinc-100 hover:text-xl flex items-center justify-center" onClick={() => setShowModal(true)}>
                <p type="button" className='text-zinc-50'>{'Ver más >>'}</p>
            </button>
        </div>
    );
}