// REFERENCIAS
let back_button = document.getElementById('back_btn');

$(document).ready(function() {
    // Fundido de entrada al cargar la página
    setTimeout(function() {
        $('#black-fade').removeClass('visible');
    }, 100);
    $('.page-container').removeClass('initial-hidden');
    $('body').removeClass('in-transition');

    $('#back_btn').click(function(event) {
        event.preventDefault();
        $('body').addClass('in-transition');
        $('.page-container').addClass('slide-out-right');
        // Mostrar overlay negro justo al terminar la animación de salida
        setTimeout(() => {
            $('#black-fade').removeClass('visible');
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 100);
        }, 100);
    });
});