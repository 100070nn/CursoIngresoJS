/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var importeFinal;
    var descuento;

    importe = parseFloat(document.getElementById("txtIdImporte").value);

    descuento = importe * 25 / 100;

    importeFinal = importe - descuento;

    document.getElementById("txtIdResultado").value = importeFinal;

    /*
    Britos Milton */
}
