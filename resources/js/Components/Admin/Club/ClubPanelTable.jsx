import ClubPanelTableRow from "@/Components/Admin/Club/ClubPanelTableRow";

export default function ClubPanelTable({ clubs }) {
    console.table(clubs);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen min-w-screen text-center p-10">
            <table className="table-auto w-full">
                <thead className="bg-zinc-200">
                    <tr className="text-zinc-800 bold mb-2">
                        <th scope="col" className="p-5">Nombre</th>
                        <th scope="col" className="p-5">C. autónoma</th>
                        <th scope="col" className="p-5">Zona</th>
                        <th scope="col" className="p-5">Web</th>
                        <th scope="col" className="p-5">Email</th>
                        <th scope="col" className="p-5">Instagram</th>
                        <th scope="col" className="p-5">Facebook</th>
                        <th scope="col" className="p-5">Logo</th>
                        <th scope="col" className="p-5">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clubs.map(
                            (club, index) => {
                                return <ClubPanelTableRow key={index} club={club} />
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}