import { useEffect, useState } from "react";

export default function StandardFilters( { exercises, setFiltroKeyword, setFiltroZonaEscogida, setFiltroDificultad }) {
    const [partesCuerpo, setPartesCuerpo] = useState([]);
    const [dificultades, setDificultades] = useState([]);

    useEffect(() => {
        let fullPartes = [];
        exercises.map((exercise) => fullPartes.push(exercise['category']));
        setPartesCuerpo(Array.from(new Set(fullPartes)));
    }, [])

    useEffect(() => {
        let fullDificultades= [];
        exercises.map((exercise) => fullDificultades.push(exercise['difficulty']));
        setDificultades(Array.from(new Set(fullDificultades)));
    }, [])

    console.log(partesCuerpo);
    console.log(dificultades);
    return (
        <div className="bg-zinc-100 flex justify-start p-5 ml-2 me-2 w-full text-center">
            <form className="flex h-10 m-3">
                <label className="font-bold mr-2 self-center" htmlFor="zona">Zona del cuerpo:</label>
                <select className="bg-zinc-50 border-zinc-500 rounded" name="zona"
                onChange={(e) => {
                    setFiltroZonaEscogida(e.target.value);
                }}>
                    <option value="all">Todas</option>
                    {
                        partesCuerpo.map(
                            parte, index => {
                                return <option key={index} value={parte}>{parte}</option>
                            }
                        )
                    }
                </select>
            </form>
            <form className="flex h-10 m-3">
                <label className="font-bold mr-2 self-center" htmlFor="zona">Dificultad:</label>
                <select className="bg-zinc-50 border-zinc-500 rounded" name="dificultad"
                onChange={(e) => {
                    setFiltroDificultad(e.target.value);
                }}>
                    <option value="all">Cualquiera</option>
                    {
                        dificultades.map(
                            nivel, index => {
                                return <option key={index} value={nivel}>{nivel}</option>
                            }
                        )
                    }
                </select>
            </form>
            <form className="flex h-10 m-3">
                <label className="font-bold mr-2 self-center" htmlFor="zona">Palabras clave:</label>
                <input className="bg-zinc-50 border-zinc-500 rounded" type="text" name="titulo"
                    onChange={ (e) => {
                        setFiltroKeyword(e.target.value);
                    }}
                />
                {/* <button type="button" className="p-3 bg-zinc-300 hover:bg-zinc-400 flex items-center justify-center rounded">
                   Buscar
                </button> */}
            </form>
        </div>
    );
}