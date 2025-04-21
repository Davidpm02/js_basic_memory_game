$(document).ready(function() {
    // Fundido de entrada al cargar la página
    setTimeout(function() {
        $('#black-fade').removeClass('visible');
    }, 100);
    $('.page-container').removeClass('initial-hidden');
    $('body').removeClass('in-transition');

    $('#start-button').click(function(event) {
        event.preventDefault();
        $('body').addClass('in-transition');
        $('.page-container').addClass('slide-out-left');
        // Mostrar overlay negro justo al terminar la animación de salida
        setTimeout(() => {
            $('#black-fade').removeClass('visible');
            setTimeout(() => {
                window.location.href = 'templates/game_template.html';
            }, 100); // Espera a que el overlay esté completamente visible
        }, 100);
    });
});

