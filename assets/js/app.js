$(document).ready(function() {
    // Mostrar detalles al hacer clic en "Ver más"
    $(".text-body-secondary").click(function() {
        var idBoton = $(this).attr("id");
        // Concatenar "detalles" con el ID del botón
        var idDetalles = "#detalles" + idBoton;

        // Ocultar todos los detalles antes de mostrar el seleccionado
        $(".detalles").hide();

        // Mostrar el cuadro de detalles correspondiente
        $(idDetalles).toggle();
    });

    // Ocultar detalles al hacer clic en el botón de cierre
    $(".btn-close").click(function() {
        $(this).closest(".detalles").hide();
    });
});
