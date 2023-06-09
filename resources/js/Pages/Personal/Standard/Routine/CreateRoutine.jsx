import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Modal from "@/Components/Modal";
import CreateConfirmationModal from "@/Components/Personal/Routine/CreateConfirmationModal";

export default function CreateRoutine({ auth, exercises }) {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [submitConfirmation, setSubmitConfirmation] = useState(false);
    const [showModal, setShowModal] = useState(false);
    var formulario = new FormData();


    function setUpData() {
        formulario.set('user_id', auth.user.id)
        formulario.set('title', title);
        formulario.set('description', description);
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

    function insertarRelaciones() {
        tomarDatosCheckbox();
    }

    // function tomarDatosCheckbox() {
    //     let checkboxGroup = document.querySelectorAll('input[type=checkbox]');
    //     let arr = [];
    //     checkboxGroup.forEach(
    //         element => {
    //             if (checkedWithNumber(element)) {
    //                 arr.push(
    //                     {
    //                         "routine_id" : 
    //                         "standard_exercise_id" : element.id.slice(-1),
    //                         "repeticiones" : document.querySelector('#reps'+element.id.slice(-1)).value,
    //                     }
    //                 );
    //             }
    //         }
    //     )
    // }

    function submitData() {
        fetch('/espacio-personal/standard/rutinas', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
            body: formulario
        })
            .then(function (response) {
                if (response.status == 201) {
                    console.log(response.json());
                    // insertarRelaciones();
                } else {
                    readStream(response.body);
                }
            })
            .then(function (data) {
                // Handle the response data
                console.log(data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }

    async function readStream(stream) {
        const reader = stream.getReader();
        let result = "";
      
        while (true) {
          const { done, value } = await reader.read();
      
          if (done) {
            break;
          }
      
          // Assuming the stream contains text data
          result += value;
        }
      
        console.log(result);
      }      

    // un poco spaghettoncio, lo sé
    function validateData() {
        var allOkay = true;

        if (!requiredString(title)) {
            document.querySelector('#title').classList.replace('border-zinc-300', 'border-red-600');
            allOkay = false;
        }

        if (!requiredString(description)) {
            document.querySelector('#description').classList.replace('border-zinc-300', 'border-red-600');
            allOkay = false;
        }

        let checkboxGroup = document.querySelectorAll('input[type=checkbox]');
        if(!oneChecked(checkboxGroup)) {
            document.querySelector('#aviso-marcar').classList.remove('hidden');
            allOkay = false;
        }

        if(!checkedWithNumber(checkboxGroup)) {
            document.querySelector('#aviso-reps').classList.remove('hidden');
            allOkay = false;
        }

        return allOkay;
    }

    function oneChecked(checkboxGroup) {
        let checked = false;
        checkboxGroup.forEach(
            (element) => {
                if (element.checked)
                checked = true;
            }
        );
        return checked;
    }

    function checkedWithNumber(checkboxGroup) {
        checkboxGroup.forEach(
            element => {
                if (element.checked && !checkReps(element))
                    return false;
            }
        )
        return true;
    }

    function checkReps(element) {
        var repsId = '#reps' + element.id.slice(-1);
        if (document.querySelector(repsId).value == 0 || document.querySelector(repsId).value == '' || document.querySelector(repsId).value == null)
            return false;

        return true;
    }

    function requiredString(string) {
        if (!string || string == '' || string == ' ' || string == undefined || string.length > 255)
            return false;

        return true;
    }

    function clearValidationBorders() {
        var inputArray = document.querySelectorAll('input, textarea');
        inputArray.forEach(
            input => {
                input.classList.contains('border-red-600') ? input.classList.replace('border-red-600', 'border-zinc-300') : null;
            }
        );
        document.querySelector('#aviso-marcar').classList.add('hidden');
        document.querySelector('#aviso-reps').classList.add('hidden');
    }

    return (
        <Authenticated user={auth.user}>
            <Head title="Añadir ejercicio estándar" />
            <div className="text-center">
                <h1 className="text-5xl text-zinc-900 p-10">Crear rutina</h1>
                <Link href="/admin/standard" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded text-2xl">{'<< Volver al panel'}</Link>
                <p id="aviso-marcar" className="mt-5 text-red-400 hidden">Debe añadirse al menos un ejercicio.</p>
                <p id="aviso-reps" className="mt-5 text-red-400 hidden">Los ejercicios añadidos deben tener una repetición mínimo.</p>

                <div className="flex w-38 h-auto p-10 pt-3 pb-0 items-center justify-center">
                    <div className="flex flex-col justify-center items-end basis-1/2 p-5">
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="title">Título</label>
                            <input id="title" className="rounded border-zinc-300 w-60 h-9" type="text" name="title" required onChange={(e) => {
                                setTitle(e.target.value);
                            }} />
                        </div>
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="description">Descripción</label>
                            <textarea id="description" className="rounded border-zinc-300 w-60 h-15" maxLength={255} name="description" required onChange={(e) => {
                                setDescription(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start basis-1/2 mb-3 p-5">
                        <label className="text-zinc-700 font-bold mb-3" htmlFor="Ejercicios">Ejercicios</label>
                        {
                            exercises.map(
                                (exercise, index) => {
                                    return (
                                        <div key={index} className="flex">
                                            <div className="inline-block mb-3">
                                                <input type="checkbox" className="rounded border-zinc-300 mr-2" id={'check'+exercise.id} />
                                                <label className="mr-3">{exercise.name}</label>
                                                ×
                                                <input type="number" id={'reps'+exercise.id} className="rounded border-zinc-300 ml-3" min="1" max="99" />
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <button type="button" className="bg-violet-500 text-violet-700 font-semibold text-white py-2 px-4 border border-transparent rounded text-2xl mb-5" onClick={() => {
                    submitForm();
                }}>{'Crear'}</button>
            </div>
            <Modal show={showModal}>
                <CreateConfirmationModal setShowModal={setShowModal} setSubmitConfirmation={setSubmitConfirmation} />
            </Modal>
        </Authenticated>
    );
}