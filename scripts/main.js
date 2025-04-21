$(document).ready(function() {
    // Mostrar directamente la página, sin animación de entrada
    $('.page-container').removeClass('initial-hidden');
    $('body').removeClass('in-transition');

    $('#start-button').click(function(event) {
        event.preventDefault();
        $('body').addClass('in-transition');
        $('.page-container').addClass('slide-out-left');
        setTimeout(() => {
            window.location.href = 'templates/game_template.html';
        }, 400);
    });
});

