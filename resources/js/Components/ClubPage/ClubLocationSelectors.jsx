import { useEffect, useState } from "react";

/**
 * Componente que permite el filtrado por comunidad autónoma de las tarjetas de club.
 * Recibe la función changeComunidad del componente padre, que sirve para cambiar dicho filtro.
 */

export default function ClubLocationSelector( {clubs, setFiltroComunidad} ) {
    const [comunidadesAutonomas, setComunidadesAutonomas] = useState([]);
    const [comunidadEscogida, setComunidadEscogida] = useState('all');

    useEffect(() => {
        setFiltroComunidad(comunidadEscogida);
    }, [comunidadEscogida]);

    useEffect(() => {
        setComunidadesAutonomas(getComunidadesAutonomas());
    }, [])

    function getComunidadesAutonomas() {
        let fullComunidades = [];
        clubs.map((club) => fullComunidades.push(club['c_autonoma']));
        return Array.from(new Set(fullComunidades));
    }

    return (
        <div className="bg-zinc-100 flex flex-col p-5 w-full text-center">
                {
                    Array.isArray(comunidadesAutonomas) && comunidadesAutonomas.length != 0 ?
                    (
                        <div className="w-25 text-start ml-10">
                            <label htmlFor="selectComunidad" className="font-bold">Filtrar por comunidad autónoma:</label>
                            <select name="selectComunidad" className="ml-5 rounded" onChange={(e) => setComunidadEscogida(e.target.value)}>
                                <option value='all'>Ver todos</option>
                                {
                                    comunidadesAutonomas.map(
                                        (comunidad) => {
                                            return <option value={comunidad}>{comunidad}</option>
                                        }
                                    )
                                }
                            </select>
                        </div>
                    )
                    :
                    (
                        <>
                        <p>¡Vaya! Parece que ha habido un error.</p>
                        <p className="bold">Refresca para volver a intentarlo.</p>
                        </>
                    )
                }
        </div>
    );
}