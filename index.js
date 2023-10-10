window.addEventListener('load', function() {
    let cartel = document.getElementById('cartel');
    cartel.style.display = 'block';
});

function cerrarCartel() {
    let cartel = document.getElementById('cartel');
    cartel.style.display = 'none';
}

let botonCerrar = document.getElementById('cerrarCartel');
botonCerrar.addEventListener('click', cerrarCartel);
