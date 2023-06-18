import UserPanelTableRow from "@/Components/Admin/User/UserPanelTableRow";

export default function UserPanelTable({ users, setShowModalEdit, setUserEdit }) {
    console.table(users);
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-screen min-w-screen text-center p-10">
            <table className="table-fixed w-full">
                <thead className="bg-zinc-200">
                    <tr className="text-zinc-800 bold mb-2">
                        <th scope="col" className="p-5">Nombre</th>
                        <th scope="col" className="p-5">Email</th>
                        <th scope="col" className="p-5">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            (user, index) => {
                                return <UserPanelTableRow
                                key={index} user={user}
                                setShowModalEdit={setShowModalEdit}
                                setUserEdit={setUserEdit} />
                            }
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}