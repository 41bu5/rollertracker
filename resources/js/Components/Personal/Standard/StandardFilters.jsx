import { useEffect, useState } from "react";

export default function StandardFilters( { exercises, setFiltroKeyword, setFiltroZonaEscogida, setFiltroDificultad }) {
    const [partesCuerpo, setPartesCuerpo] = useState([]);
    const [dificultades, setDificultades] = useState([]);

    console.log(exercises);
    useEffect(() => {
        setPartesCuerpo(getUniqueValues('category'));
    }, [])

    useEffect(() => {
        setDificultades(getUniqueValues('difficulty'));
    }, [])

    function getUniqueValues(field) {
        let fullArray = [];
        exercises.map((exercise) => fullArray.push(exercise[field]));
        return Array.from(new Set(fullArray));
    }

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
                            function (parte, index) {
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
                            function (nivel, index) {
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
            </form>
        </div>
    );
}