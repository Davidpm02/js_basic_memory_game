$(document).ready(function() {
    // Al hacer clic en el botón de jugar
    $('#start-button').click(function() {
        // Evitar el comportamiento predeterminado si tienes un enlace
        event.preventDefault();
        
        // Aplicar la animación
        $('.page-container').addClass('animate_content');
        
        // Esperar a que termine la animación antes de redirigir
        setTimeout(function() {
            // Redirigir a la página del juego
            window.location.href = 'templates/game_template.html'; // Cambia 'game.html' por la URL de tu página de juego
        }, 1500); // 1.5 segundos, ajusta según la duración de tu animación
    });
});