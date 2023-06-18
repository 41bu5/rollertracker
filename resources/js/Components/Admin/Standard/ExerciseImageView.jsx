export default function ExerciseImageView({ setShowModalImage, imageModal }) {
    return (
        <div className="text-center w-42 max-h-screen">
            <button type="button" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded m-4" onClick={() => {
                setShowModalImage(false);
            }}>Cerrar</button>
            <img src={imageModal} className="w-fit">
            </img>
        </div>
    );
}