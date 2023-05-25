export default function StandardCard( { exercise }) {
    return (
        <div className="basis-1/2 bg-zinc-50 flex">
            <div className="basis-3/4 flex flex-col">
                <div className="basis-1/2">
                    <p>{exercise.name}</p>
                </div>
                <div className="basis-1/2">
        
                </div>
            </div>
            <div className="basis-1/4"></div>
        </div>
    );
}