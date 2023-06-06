export default function RoutineFilters( { setFiltroKeyword, setFiltroOrden }) {
    return (
        <div className="bg-zinc-100 flex justify-start p-5 ml-2 me-2 w-full text-center">
            <form className="flex h-10 m-3">
                <label className="font-bold mr-2 self-center" htmlFor="orderby">Ordenar por:</label>
                <select className="bg-zinc-50 border-zinc-500 rounded" name="orderby"
                    onChange={(e) => {
                        setFiltroOrden(e.target.value);
                        console.log('Select orden ' + e.target.value);
                    }}>
                    <option value="alfa">Orden alfabético</option>
                    <option value="created_asc">Creación (asc.)</option>
                    <option value="created_desc">Creación (desc.)</option>
                    <option value="modified_asc">Modificación (asc.)</option>
                    <option value="modified_desc">Modificación (desc.)</option>
                </select>
            </form>
            <form className="flex h-10 m-3">
                <label className="font-bold mr-2 self-center" htmlFor="zona">Palabras clave:</label>
                <input className="bg-zinc-50 border-zinc-500 rounded" type="text" name="titulo"
                    onChange={(e) => {
                        setFiltroKeyword(e.target.value);
                        console.log('Select keyword a ' + e.target.value);
                    }}
                />
            </form>
        </div>
    );
}