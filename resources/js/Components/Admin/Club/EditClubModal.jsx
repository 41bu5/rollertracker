import { useState } from "react";

export default function EditClubModal({ club, setShowModalEdit }) {
    const comunidades = ["Mezcla", "Andalucía", "Aragón", "Islas Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Ceuta", "Comunidad Valenciana", "Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", "Navarra", "País Vasco", "Asturias", "Región de Murcia"];
    const [clubName, setClubName] = useState(club.name);
    const [clubComunidad, setClubComunidad] = useState(club.c_autonoma);
    const [clubZona, setClubZona] = useState(club.zona);
    const [clubWeb, setClubWeb] = useState(club.web);
    const [clubEmail, setClubEmail] = useState(club.email);
    const [clubInstagram, setClubInstagram] = useState(club.instagram);
    const [clubFacebook, setClubFacebook] = useState(club.facebook);
    var formulario = new FormData();

    function setUpData() {
        formulario.set('id', club.id);
        formulario.set('name', clubName);
        formulario.set('c_autonoma', clubComunidad);
        formulario.set('city', clubZona);
        document.querySelector('#logo').files[0] ? formulario.set('logo', document.querySelector('#logo').files[0]) : null;
        formulario.set('web', clubWeb);
        formulario.set('email', clubEmail,);
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
            submitData();
        }
    }

    function submitData() {
        fetch('/admin/clubs', {
          method: 'PATCH',
          headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            'Content-Type' : 'multipart/form-data',
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
        <div className="w-42 max-h-screen text-center">
            <button type="button" className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded m-4" onClick={() => {
                setShowModalEdit(false);
            }}>Cerrar</button>
            <form encType="multipart/form-data" className="flex flex-col pl-20 pr-20 justify-center items-center">
                <div className="mb-3 flex items-center">
                    <label className="text-zinc-700 basis-1/4 font-bold mr-3" htmlFor="name">Nombre</label>
                    <input id="name" value={clubName} className="basis-3/4 rounded border-zinc-300 w-60 h-9" type="text" name="name" required onChange={(e) => {
                        setClubName(e.target.value);
                    }} />
                </div>
                <div className="mb-3 flex items-center">
                    <label className="text-zinc-700 basis-1/4 font-bold mr-3" htmlFor="c_autonoma">Comunidad</label>
                    <select id="c_autonoma" defaultValue={clubComunidad} className="basis-3/4 rounded border-zinc-300 w-60 h-10" type="text" name="c_autonoma" required onChange={(e) => {
                        setClubComunidad(e.target.value);
                    }}>
                        {comunidades.map(
                            (comunidad, index) => {
                                return <option key={index + 1} value={comunidad}>{comunidad}</option>
                            }
                        )}
                    </select>
                </div>
                <div className="mb-3 flex items-center">
                    <label className="text-zinc-700 basis-1/4 font-bold mb-3" htmlFor="city">Zona</label>
                    <input id="city" defaultValue={clubZona} className="basis-3/4 rounded border-zinc-300 w-60 h-9" type="text" name="city" required onChange={(e) => {
                        setClubZona(e.target.value);
                    }} />
                </div>
                <div className="mb-3 flex items-center">
                    <label className="text-zinc-700 basis-1/4 font-bold mb-3" htmlFor="logo">Logo</label>
                    <input id="logo" className="rounded basis-3/4 border-zinc-300 w-60 h-9" type="file" accept="image/png, image/jpg, image/jpeg" name="logo" required onChange={(e) => {
                        setClubLogo(e.target.value);
                    }} />
                </div>
                <div className="mb-3 flex items-center">
                    <label className="text-zinc-700 basis-1/4 font-bold mb-3" htmlFor="web">Dirección web</label>
                    <input id="web" value={clubWeb} className="rounded basis-3/4 border-zinc-300 w-60 h-9" type="url" name="web" onChange={(e) => {
                        setClubWeb(e.target.value);
                    }} />
                    <p id="formato-web" className="text-red-400 text-sm hidden">Debe contener http:// / https:// </p>
                </div>
                <div className="mb-3 flex items-center">
                    <label className="text-zinc-700 basis-1/4 font-bold mb-3" htmlFor="email">Email</label>
                    <input id="email" value={clubEmail} className="rounded basis-3/4 border-zinc-300 w-60 h-9" type="email" name="email" onChange={(e) => {
                        setClubEmail(e.target.value);
                    }} />
                    <p id="formato-email" className="text-red-400 text-sm hidden">Formato: ejemplo@email.com</p>
                </div>
                <div className="mb-3 flex items-center">
                    <label className="text-zinc-700 basis-1/4 font-bold mb-3" htmlFor="instagram">Instagram</label>
                    <input id="instagram" value={clubInstagram} className="rounded basis-3/4 border-zinc-300 w-60 h-9" type="url" name="instagram" onChange={(e) => {
                        setClubInstagram(e.target.value);
                    }} />
                    <p id="formato-instagram" className="text-red-400 text-sm hidden">Debe contener http:// / https://</p>
                </div>
                <div className="mb-3 flex items-center">
                    <label className="text-zinc-700 basis-1/4 font-bold mb-3" htmlFor="facebook">Facebook</label>
                    <input id="facebook" value={clubFacebook} className="rounded basis-3/4 border-zinc-300 w-60 h-9" type="url" name="facebook" onChange={(e) => {
                        setClubFacebook(e.target.value);
                    }} />
                    <p id="formato-facebook" className="text-red-400 text-sm hidden">Debe contener http:// / https://</p>
                </div>
                <button type="button" className="bg-violet-500 hover:bg-violet-700 font-semibold text-white py-2 px-4 border border-transparent rounded text-xl mb-2" onClick={(e) => submitForm(e)}>Actualizar</button>
            </form>
        </div>
    );
}