export default function UserPanelTableRow({ user, setShowModalEdit, setUserEdit }) {
    console.log(user);
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <div className="inline-flex">
                <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" type="button" onClick={() => {
                    setUserEdit(user);
                    setShowModalEdit(true);
                }}>Editar</button>
                </div>
            </td>
        </tr>
    );
}