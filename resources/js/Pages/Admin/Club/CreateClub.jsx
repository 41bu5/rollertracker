import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import ConfirmationModal from "../ConfirmationModal";

export default function CreateClub({ auth }) {
    const comunidades = ["Mezcla", "Andalucía", "Aragón", "Islas Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Ceuta", "Comunidad Valenciana", "Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", "Navarra", "País Vasco", "Asturias", "Región de Murcia"];
    const [clubName, setClubName] = useState(null);
    const [clubComunidad, setClubComunidad] = useState(null);
    const [clubZona, setClubZona] = useState(null);
    const [clubWeb, setClubWeb] = useState(null);
    const [clubEmail, setClubEmail] = useState(null);
    const [clubInstagram, setClubInstagram] = useState(null);
    const [clubFacebook, setClubFacebook] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [submitConfirmation, setSubmitConfirmation] = useState(false);
    const formulario = new FormData();

    useEffect(() => {
        submitConfirmation ? submitData() : console.log('No mandado');
    }, [submitConfirmation])

    function setUpData() {
        formulario.set('name', clubName);
        formulario.set('c_autonoma', clubComunidad);
        formulario.set('zona', clubZona);
        formulario.set('logo', document.querySelector('#logo').files[0]);
        formulario.set('web', clubWeb);
        formulario.set('email', clubEmail);
        formulario.set('instagram', clubInstagram);
        formulario.set('facebook', clubFacebook);
    }

    function submitForm() {
        clearValidationBorders();

        if (validateData()) {
            setUpData();
            for (var pair of formulario.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            setShowModal(true);
        }
    }
    
    function submitData() {
        fetch('/admin/clubs', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            body: formulario
        })
            .then(function (response) {
                if (response.status == 201) {
                    return response.json();
                } else {
                    console.log('Request failed: ' + response.body);
                }
            })
            .then(function (data) {
                // Handle the response data
                console.log(data);
                location.href('/admin/clubs');
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // un poco spaghettoncio, lo sé
    function validateData() {
        var allOkay = true;

        if (!requiredString(clubName)) {
            document.querySelector('#name').classList.replace('border-zinc-300', 'border-red-600');
            allOkay = false;
        }

        if (!requiredString(clubComunidad)) {
            document.querySelector('#c_autonoma').classList.replace('border-zinc-300', 'border-red-600');
            allOkay = false;
        }

        if (!requiredString(clubZona)) {
            document.querySelector('#city').classList.replace('border-zinc-300', 'border-red-600');
            allOkay = false;
        }

        if (document.querySelector('#logo').files[0] == null) {
            document.querySelector('#logo-error').classList.remove('hidden');
            allOkay = false;
        }

        if (clubWeb && !isValidHttpUrl(clubWeb)) {
            document.querySelector('#formato-web').classList.remove('hidden');
            allOkay = false;
        }

        if (clubEmail && !validateEmail(clubEmail)) {
            document.querySelector('#formato-email').classList.remove('hidden');
            allOkay = false;
        }

        if (clubWeb && !isValidHttpUrl(clubWeb)) {
            document.querySelector('#formato-web').classList.remove('hidden');
            allOkay = false;
        }

        if (clubInstagram && !isValidHttpUrl(clubInstagram)) {
            document.querySelector('#formato-instagram').classList.remove('hidden');
            allOkay = false;
        }

        if (clubFacebook && !isValidHttpUrl(clubFacebook)) {
            document.querySelector('#formato-facebook').classList.remove('hidden');
            allOkay = false;
        }

        return allOkay;
    }

    function requiredString(string) {
        if (!string || string == '' || string == ' ' || string == undefined || string.length > 255)
            return false;

        return true;
    }

    function clearValidationBorders() {
        var inputArray = document.querySelectorAll('input, select');
        inputArray.forEach(
            input => {
                input.classList.contains('border-red-600') ? input.classList.replace('border-red-600', 'border-zinc-300') : null;
            }
        );
        document.querySelector('#logo-error').classList.add('hidden');
        document.querySelector('#formato-web').classList.add('hidden');
        document.querySelector('#formato-email').classList.add('hidden');
        document.querySelector('#formato-instagram').classList.add('hidden');
        document.querySelector('#formato-facebook').classList.add('hidden');
    }

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function isValidHttpUrl(string) {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    }

    return (
        <Authenticated user={auth.user}>
            <Head title="Añadir club" />
            <div className="text-center">
                <h1 className="text-5xl text-zinc-900 p-10">Añadir un club</h1>
                <Link href="/admin/clubs" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">{'<< Volver al panel'}</Link>

                <form encType="multipart/form-data">
                    <div className="flex w-screen h-auto p-10 items-center justify-center">
                        <div className="basis-1/2 flex flex-col items-center justify-center ml-10">
                            <div className="flex flex-col basis-1/4 mb-3">
                                <label className="text-zinc-700 font-bold mb-3" htmlFor="name">Nombre</label>
                                <input id="name" className="rounded border-zinc-300 w-60 h-9" type="text" name="name" required onChange={(e) => {
                                    setClubName(e.target.value);
                                }} />
                            </div>
                            <div className="flex flex-col basis-1/4 mb-3">
                                <label className="text-zinc-700 font-bold mb-3" htmlFor="c_autonoma">Comunidad autónoma</label>
                                <select id="c_autonoma" className="rounded border-zinc-300 w-60 h-10" type="text" name="c_autonoma" required onChange={(e) => {
                                    setClubComunidad(e.target.value);
                                }}>
                                    <option key={0} selected disabled>--Elegir--</option>
                                    {comunidades.map(
                                        (comunidad, index) => {
                                            return <option key={index + 1} value={comunidad}>{comunidad}</option>
                                        }
                                    )}
                                </select>
                            </div>
                            <div className="flex flex-col basis-1/4 mb-3">
                                <label className="text-zinc-700 font-bold mb-3" htmlFor="city">Zona</label>
                                <input id="city" className="rounded border-zinc-300 w-60 h-9" type="text" name="city" required onChange={(e) => {
                                    setClubZona(e.target.value);
                                }} />
                            </div>
                            <div className="flex flex-col basis-1/4 mb-3">
                                <label className="text-zinc-700 font-bold mb-3" htmlFor="logo">Logo</label>
                                <input id="logo" className="rounded border-zinc-300 w-60 h-9" type="file" accept="image/png, image/jpg, image/jpeg" name="logo" />
                                <p id="logo-error" className="text-start text-sm text-red-600 hidden">Campo obligatorio.</p>
                            </div>
                        </div>
                        <div className="basis-1/2 flex flex-col items-center justify-center mr-10">
                            <div className="flex flex-col basis-1/4 mb-3">
                                <label className="text-zinc-700 font-bold mb-3" htmlFor="web">Dirección web <span className="text-zinc-500 font-normal">{'(opcional)'}</span></label>
                                <input id="web" className="rounded border-zinc-300 w-60 h-9" type="url" name="web" onChange={(e) => {
                                    setClubWeb(e.target.value);
                                }} />
                                <p id="formato-web" className="text-red-400 text-sm hidden">Debe contener http:// / https:// </p>
                            </div>
                            <div className="flex flex-col basis-1/4 mb-3">
                                <label className="text-zinc-700 font-bold mb-3" htmlFor="email">Email <span className="text-zinc-500 font-normal">{'(opcional)'}</span></label>
                                <input id="email" className="rounded border-zinc-300 w-60 h-9" type="email" name="email" onChange={(e) => {
                                    setClubEmail(e.target.value);
                                }} />
                                <p id="formato-email" className="text-red-400 text-sm hidden">Formato: ejemplo@email.com</p>
                            </div>
                            <div className="flex flex-col basis-1/4 mb-3">
                                <label className="text-zinc-700 font-bold mb-3" htmlFor="instagram">Instagram <span className="text-zinc-500 font-normal">{'(opcional)'}</span></label>
                                <input id="instagram" className="rounded border-zinc-300 w-60 h-9" type="url" name="instagram" onChange={(e) => {
                                    setClubInstagram(e.target.value);
                                }} />
                                <p id="formato-instagram" className="text-red-400 text-sm hidden">Debe contener http:// / https://</p>
                            </div>
                            <div className="flex flex-col basis-1/4 mb-3">
                                <label className="text-zinc-700 font-bold mb-3" htmlFor="facebook">Facebook <span className="text-zinc-500 font-normal">{'(opcional)'}</span></label>
                                <input id="facebook" className="rounded border-zinc-300 w-60 h-9" type="url" name="facebook" onChange={(e) => {
                                    setClubFacebook(e.target.value);
                                }} />
                                <p id="formato-facebook" className="text-red-400 text-sm hidden">Debe contener http:// / https://</p>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="bg-violet-500 hover:bg-violet-700 font-semibold text-white py-2 px-4 border border-transparent rounded text-xl" onClick={(e) => submitForm(e)}>Crear</button>
                </form>
            </div>
            <Modal show={showModal}>
                <ConfirmationModal setShowModal={setShowModal} setSubmitConfirmation={setSubmitConfirmation} />
            </Modal>
        </Authenticated>
    );
}