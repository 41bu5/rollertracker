import { useState } from "react";

export default function EditUserModal({ user, setShowModalEdit }) {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const formulario = new FormData();

    function setUpData() {
        formulario.set('id', user.id);
        formulario.set('name', name);
        formulario.set('email', email);
        formulario.set('password', password);
    }

    function submitForm(e) {
        e.preventDefault();
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
        fetch('/admin/user', {
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

        if (!validateEmail(email)) {
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
        <div className="w-42 text-center">
            <button type="button" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded m-4" onClick={() => {
                setShowModalEdit(false);
            }}>Cerrar</button>
            <form encType="multipart/form-data">
                    <div className="flex flex-col h-auto p-10 pb-0 items-center justify-center">
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="name">Nombre</label>
                            <input value={name} id="name" className="rounded border-zinc-300 w-60 h-9" type="text" name="name" required onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        </div>
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="email">Email</label>
                            <input id="email" value={email} type="email" className="rounded border-zinc-300 w-60 h-15" name="email" required onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <p id="formato-email" className="text-red-400 text-sm hidden">Formato: ejemplo@email.com</p>
                        </div>
                        <div className="flex flex-col mb-3">
                            <label className="text-zinc-700 font-bold mb-3" htmlFor="password">Contraseña</label>
                            <input id="password" value={password} type="password" className="rounded border-zinc-300 w-60 h-15" name="password" readOnly required placeholder="No visible" />
                            <button type="button" className="bg-gray-500 hover:bg-gray-700 font-semibold text-white py-2 px-4 border border-transparent rounded text-md" onClick={() => {
                                setPassword('password');
                            }}>Resetear</button>
                        </div>
                    </div>
                    <button type="button" className="bg-violet-500 hover:bg-violet-700 font-semibold text-white py-2 px-4 border border-transparent rounded text-xl mb-2" onClick={(e) => submitForm(e)}>Actualizar</button>
                </form>
        </div>
    );
}