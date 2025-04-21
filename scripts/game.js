// REFERENCIAS
let back_button = document.getElementById('back_btn');

$(document).ready(function() {
    // Mostrar directamente la página, sin animación de entrada
    $('.page-container').removeClass('initial-hidden');
    $('body').removeClass('in-transition');

    $('#back_btn').click(function(event) {
        event.preventDefault();
        $('body').addClass('in-transition');
        $('.page-container').addClass('slide-out-right');
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 400);
    });
});