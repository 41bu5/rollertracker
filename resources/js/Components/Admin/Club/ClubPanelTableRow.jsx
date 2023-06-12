export default function ClubPanelTableRow({ club }) {
    console.log(club);
    return (
        <tr>
            <td>{club.name}</td>
            <td>{club.c_autonoma}</td>
            <td>{club.zona}</td>
            <td>{
                club.web ?
                    (
                        <a href={club.web} className="text-violet-700 bold">Link</a>
                    ) :
                    (
                        <p className="text-zinc-400">Vacío</p>
                    )
            }
            </td>
            <td>{
                club.email ?
                    (
                        <p className="text-zinc-700">{club.email}</p>
                    ) :
                    (
                        <p className="text-zinc-400">Vacío</p>
                    )
            }</td>
            <td>{
                club.instagram ?
                    (
                        <a href={club.instagram} className="text-violet-700 bold">Link</a>
                    ) :
                    (
                        <p className="text-zinc-400">Vacío</p>
                    )
            }
            </td>
            <td>{
                club.facebook ?
                    (
                        <a href={club.facebook} className="text-violet-700 bold">Link</a>
                    ) :
                    (
                        <p className="text-zinc-400">Vacío</p>
                    )
            }
            </td>
            <td>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">Ver</button>
            </td>
            <td>
                <div className="inline-flex">
                <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" type="button">Editar</button>
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" type="button">Eliminar</button>
                </div>
            </td>
        </tr>
    );
}