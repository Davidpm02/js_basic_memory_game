// REFERENCIAS
let back_button = document.getElementById('back_btn')

back_button.addEventListener('click', function() {
    
    
    setTimeout(function() {
        // Redirigir a la página principal
        window.location.href = '../index.html'; // Cambia 'index.html' por la URL de tu página principal
    }, 500); // .5 segundos, ajusta según la duración de tu animación
})