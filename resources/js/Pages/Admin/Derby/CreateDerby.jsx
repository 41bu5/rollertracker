import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import ConfirmationModal from "../ConfirmationModal";

export default function CreateStandard({ auth }) {
    const categorias = ["Velocidad", "Equilibrio", "Fuerza", "Contacto", "Resistencia", "Frenadas"];
    const dificultades = ["Principiante", "Intermedia", "Avanzada", "Infierno"];
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [category, setCategory] = useState(null);
    const [difficulty, setDifficulty] = useState(null);
    const [submitConfirmation, setSubmitConfirmation] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const formulario = new FormData();

    function setUpData() {
        formulario.set('name', name);
        formulario.set('description', description);
        formulario.set('category', category);
        formulario.set('difficulty', difficulty);
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
        fetch('/admin/derby', {
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

        if (!requiredString(description)) {
            document.querySelector('#description').classList.replace('border-zinc-300', 'border-red-600');
            allOkay = false;
        }

        if (!requiredString(category)) {
            document.querySelector('#category').classList.replace('border-zinc-300', 'border-red-600');
            allOkay = false;
        }

        if (!requiredString(difficulty)) {
            document.querySelector('#difficulty').classList.replace('border-zinc-300', 'border-red-600');
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
        var inputArray = document.querySelectorAll('input, select, textarea');
        inputArray.forEach(
            input => {
                input.classList.contains('border-red-600') ? input.classList.replace('border-red-600', 'border-zinc-300') : null;
            }
        );
    }

    return (
        <Authenticated user={auth.user}>
            <Head title="Añadir ejercicio derby" />
            <div className="text-center">
                <h1 className="text-5xl text-zinc-900 p-10">Añadir un ejercicio</h1>
                <Link href="/admin/standard" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">{'<< Volver al panel'}</Link>

                <form encType="multipart/form-data">
                    <div className="flex flex-col w-screen h-auto p-10 pb-0 items-center justify-center">
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="name">Nombre</label>
                            <input id="name" className="rounded border-zinc-300 w-60 h-9" type="text" name="name" required onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        </div>
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="description">Descripción</label>
                            <textarea id="description" className="rounded border-zinc-300 w-60 h-15" maxLength={255} name="description" required onChange={(e) => {
                                setDescription(e.target.value);
                            }} />
                        </div>
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="category">Skill</label>
                            <select id="category" className="rounded border-zinc-300 w-60 h-10" name="category" required onChange={(e) => {
                                setCategory(e.target.value);
                            }}>
                                <option key={0} selected disabled>--Elegir--</option>
                                {categorias.map(
                                    (categoria, index) => {
                                        return <option key={index + 1} value={categoria}>{categoria}</option>
                                    }
                                )}
                            </select>
                        </div>
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="difficulty">Dificultad</label>
                            <select id="difficulty" className="rounded border-zinc-300 w-60 h-10" name="difficulty" required onChange={(e) => {
                                setDifficulty(e.target.value);
                            }}>
                                <option key={0} selected disabled>--Elegir--</option>
                                {dificultades.map(
                                    (dificultad, index) => {
                                        return <option key={index + 1} value={dificultad}>{dificultad}</option>
                                    }
                                )}
                            </select>
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