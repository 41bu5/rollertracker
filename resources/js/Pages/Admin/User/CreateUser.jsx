import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import ConfirmationModal from "../ConfirmationModal";

export default function CreateUser({ auth }) {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [submitConfirmation, setSubmitConfirmation] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const formulario = new FormData();

    function setUpData() {
        formulario.set('name', name);
        formulario.set('email', email);
        formulario.set('password', password);
    }

    useEffect(() => {
        submitConfirmation ? submitData() : console.log('No mandado');
    }, [submitConfirmation])

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
        fetch('/admin/users', {
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
                location.href('/admin/derby');
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    // un poco spaghettoncio, lo sé
    function validateData() {
        var allOkay = true;

        if (!requiredString(name)) {
            document.querySelector('#name').classList.replace('border-zinc-300', 'border-red-600');
            allOkay = false;
        }

        if (!email || !validateEmail(email)) {
            document.querySelector('#email').classList.replace('border-zinc-300', 'border-red-600');
            document.querySelector('#formato-email').classList.remove('hidden');
            allOkay = false;
        }

        if (!requiredString(password) || !passwordValidate(password)) {
            document.querySelector('#password').classList.replace('border-zinc-300', 'border-red-600');
            document.querySelector('#formato-password').classList.remove('hidden');
            allOkay = false;
        }

        return allOkay;
    }

    function requiredString(string) {
        if (!string || string == '' || string == ' ' || string == undefined || string.length > 255)
            return false;

        return true;
    }

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function passwordValidate(password) {
        if (password.length >= 8)
            return true;

        return false;
    }

    function clearValidationBorders() {
        var inputArray = document.querySelectorAll('input');
        inputArray.forEach(
            input => {
                input.classList.contains('border-red-600') ? input.classList.replace('border-red-600', 'border-zinc-300') : null;
            }
        );

        document.querySelector('#formato-email').classList.add('hidden');
        document.querySelector('#formato-password').classList.add('hidden');
    }

    return (
        <Authenticated user={auth.user}>
            <Head title="Crear usuario" />
            <div className="text-center">
                <h1 className="text-5xl text-zinc-900 p-10">Crear usuario</h1>
                <Link href="/admin/users" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">{'<< Volver al panel'}</Link>

                <form encType="multipart/form-data">
                    <div className="flex flex-col w-screen h-auto p-10 pb-0 items-center justify-center">
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="name">Nombre</label>
                            <input id="name" className="rounded border-zinc-300 w-60 h-9" type="text" name="name" required onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        </div>
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="email">Email</label>
                            <input id="email" type="email" className="rounded border-zinc-300 w-60 h-15" name="email" required onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <p id="formato-email" className="text-red-400 text-sm hidden">Formato: ejemplo@email.com</p>
                        </div>
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="password">Contraseña</label>
                            <input id="password" type="password" className="rounded border-zinc-300 w-60 h-15" name="password" required onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                            <p id="formato-password" className="text-red-400 text-sm hidden">Debe contener al menos 8 caracteres.</p>
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