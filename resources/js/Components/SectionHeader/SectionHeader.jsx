export default function SectionHeader( {title, subtitle} ) {
    return (
        <div className="w-full bg-purple-500 text-zinc-100 pt-10">
            <h1 className="text-7xl m-20 mb-0 ml-10">{title}</h1>
            <h2 className="text-4xl mt-7 mb-20 ml-10 text-zinc-300">{subtitle}</h2>
        </div>
    );
}