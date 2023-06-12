import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function CreateClub({ auth }) {
    const comunidades = ["Mezcla", "Andalucía", "Aragón", "Islas Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Ceuta", "Comunidad Valenciana", "Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", "Navarra", "País Vasco", "Asturias", "Región de Murcia"];

    return (
        <Authenticated user={auth.user}>
            <div className="text-center">
                <h1 className="text-5xl text-zinc-900 p-10">Añadir un club</h1>
                <Link href="/admin/clubs" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">{'<< Volver al panel'}</Link>
            
            <div className="flex w-screen h-auto p-10 items-center justify-center">
                <div className="basis-1/2 flex flex-col items-center justify-center ml-10">
                    <div className="flex flex-col basis-1/4 mb-3">
                        <label className="text-zinc-700 font-bold mb-3" htmlFor="name">Nombre</label>
                        <input className="rounded border-zinc-300 w-60 h-9" type="text" name="name" required />
                    </div>
                    <div className="flex flex-col basis-1/4 mb-3">
                        <label className="text-zinc-700 font-bold mb-3" htmlFor="c_autonoma">Comunidad autónoma</label>
                        <select className="rounded border-zinc-300 w-60 h-10" type="text" name="c_autonoma" required>
                            <option selected disabled>--Elegir--</option>
                            {comunidades.map(
                                comunidad => {
                                    return <option value={comunidad}>{comunidad}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="flex flex-col basis-1/4 mb-3">
                        <label className="text-zinc-700 font-bold mb-3" htmlFor="city">Ciudad</label>
                        <input className="rounded border-zinc-300 w-60 h-9" type="text" name="city" required />
                    </div>
                    <div className="flex flex-col basis-1/4 mb-3">
                        <label className="text-zinc-700 font-bold mb-3" htmlFor="logo">Logo</label>
                        <input className="rounded border-zinc-300 w-60 h-9" type="file" accept="image/png, image/jpg, image/jpeg" name="logo" required />
                    </div>
                </div>
                <div className="basis-1/2 flex flex-col items-center justify-center mr-10">
                    <div className="flex flex-col basis-1/4">
                        <label className="text-zinc-700 font-bold mb-3" htmlFor="phone">Teléfono <span className="text-zinc-500 font-normal">{'(opcional)'}</span></label>
                        <input className="rounded border-zinc-300 w-60 h-9" type="tel" pattern="[0-9]{9}" name="phone" />
                        <p className="text-zinc-400 text-sm">Formato: 000000000</p>
                    </div>
                    <div className="flex flex-col basis-1/4 mb-3">
                        <label className="text-zinc-700 font-bold mb-3" htmlFor="email">Email <span className="text-zinc-500 font-normal">{'(opcional)'}</span></label>
                        <input className="rounded border-zinc-300 w-60 h-9" type="email" name="email" />
                    </div>
                    <div className="flex flex-col basis-1/4 mb-3">
                        <label className="text-zinc-700 font-bold mb-3" htmlFor="instagram">Instagram <span className="text-zinc-500 font-normal">{'(opcional)'}</span></label>
                        <input className="rounded border-zinc-300 w-60 h-9" type="url" name="instagram" />
                    </div>
                    <div className="flex flex-col basis-1/4 mb-3">
                        <label className="text-zinc-700 font-bold mb-3" htmlFor="facebook">Facebook <span className="text-zinc-500 font-normal">{'(opcional)'}</span></label>
                        <input className="rounded border-zinc-300 w-60 h-9" type="url" name="facebook" />
                    </div>
                </div>
            </div>
            <Link href="/admin/clubs" className="bg-violet-500 hover:bg-violet-700 font-semibold text-white py-2 px-4 border border-transparent rounded text-xl">Crear</Link>
            </div>
        </Authenticated>
    );
}