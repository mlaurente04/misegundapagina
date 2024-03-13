document.addEventListener("DOMContentLoaded", function() {
    const reservaForm = document.querySelector('#reservaForm');
    const contactoForm = document.querySelector('#contactoForm');

    reservaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const numeroPersonas = document.querySelector('#numeroPersonas').value;
        const fechaReserva = document.querySelector('#fechaReserva').value;
        const horaReserva = document.querySelector('#horaReserva').value;

        if (numeroPersonas === '' || fechaReserva === '' || horaReserva === '') {
            alert('Por favor completa todos los campos del formulario de reserva.');
        } else {
            alert('¡Gracias por reservar en Café Aromático! Te esperamos en la fecha y hora indicada.');
            // Aquí podrías agregar código para enviar los datos del formulario a un servidor o realizar otras acciones necesarias
        }
    });

    contactoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const mensaje = document.querySelector('#mensaje').value;

        if (nombre === '' || email === '' || mensaje === '') {
            alert('Por favor completa todos los campos del formulario de contacto.');
        } else {
            alert('¡Gracias por ponerte en contacto con Café Aromático! Nos pondremos en contacto contigo pronto.');
            // Aquí podrías agregar código para enviar los datos del formulario a un servidor o realizar otras acciones necesarias
        }
    });
});