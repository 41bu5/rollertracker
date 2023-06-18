import { useState } from "react";

export default function EditExerciseModal({ exercise, setShowModalEdit }) {
    const categorias = ["Velocidad", "Equilibrio", "Fuerza", "Contacto", "Resistencia", "Frenadas"];
    const dificultades = ["Principiante", "Intermedia", "Avanzada", "Infierno"];
    const [name, setName] = useState(exercise.name);
    const [description, setDescription] = useState(exercise.description);
    const [category, setCategory] = useState(exercise.category);
    const [difficulty, setDifficulty] = useState(exercise.difficulty);
    const formulario = new FormData();

    function setUpData() {
        formulario.set('id', exercise.id);
        formulario.set('name', name);
        formulario.set('description', description);
        formulario.set('category', category);
        formulario.set('difficulty', difficulty);
    }

    function submitForm() {
        clearValidationBorders();

        if (validateData()) {
            setUpData();
            for (var pair of formulario.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }
            submitData();
        }
    }

    function submitData() {
        fetch('/admin/derby', {
          method: 'PATCH',
          headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
          },
          body: formulario
        })
          .then(function(response) {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Request failed with status: ' + response.status);
            }
          })
          .then(function(data) {
            // Handle the response data
            console.log(data);
          })
          .catch(function(error) {
            console.error(error);
          });
      
        console.log('Mandado');
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
        <div className="w-42 max-h-screen text-center">
            <button type="button" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded m-4" onClick={() => {
                setShowModalEdit(false);
            }}>Cerrar</button>
            <form encType="multipart/form-data">
                    <div className="pl-20 pr-20">
                        <div className="flex justify-center items-center mb-3">
                            <label className="text-zinc-700 font-bold mr-3 basis-1/4" htmlFor="name">Nombre</label>
                            <input id="name" value={name} className="rounded border-zinc-300 w-60 h-9 basis-3/4" type="text" name="name" required onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        </div>
                        <div className="flex justify-center items-center mb-3">
                            <label className="text-zinc-700 font-bold mr-3 basis-1/4" htmlFor="description">Descripción</label>
                            <textarea id="description" value={description} className="rounded border-zinc-300 w-60 h-15 basis-3/4" maxLength={255} name="description" required onChange={(e) => {
                                setDescription(e.target.value);
                            }} />
                        </div>
                        <div className="flex justify-center items-center mb-3">
                            <label className="text-zinc-700 font-bold mr-3 basis-1/4" htmlFor="category">Zona del cuerpo</label>
                            <select id="category" defaultValue={category} className="rounded border-zinc-300 w-60 h-10 basis-3/4" name="category" required onChange={(e) => {
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
                        <div className="flex justify-center items-center mb-3">
                            <label className="text-zinc-700 font-bold mr-3 basis-1/4" htmlFor="difficulty">Dificultad</label>
                            <select id="difficulty" defaultValue={difficulty} className="rounded border-zinc-300 w-60 h-10 basis-3/4" name="difficulty" required onChange={(e) => {
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
                    <button type="button" className="bg-violet-500 hover:bg-violet-700 font-semibold text-white py-2 px-4 border border-transparent rounded text-xl mb-2" onClick={(e) => submitForm(e)}>Actualizar</button>
                </form>
        </div>
    );
}