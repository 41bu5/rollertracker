export default function ConfirmationModal( {setShowModal, setSubmitConfirmation }) {
    return (
        <div className="p-16 text-center">
            <p className="text-xl font-bold mb-5">¿Estás seguro?</p>
            <div className="inline-block">
                <button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded mr-1" type="button" onClick={() => {
                    setShowModal(false);
                    setSubmitConfirmation(true);
                }}>Sí</button>
                <button className="bg-violet-500 font-semibold text-white py-2 px-4 border border-transparent rounded ml-1" type="button" onClick={() => {
                    setShowModal(false);
                    setSubmitConfirmation(false);
                }}>No</button>
            </div>
        </div>
    );
}