// Llamar a la funcion encriptar cuando se presione el boton "boton-encriptar"
document.getElementById("boton-encriptar").addEventListener("click", function () {
    //evitar envio de formulario
    event.preventDefault();
    
    // Obtener el texto a encriptar
    var texto = document.getElementById("texto").value;
    // Encriptar el texto
    var textoEncriptado = encriptar(texto);
    // Mostrar el texto encriptado
    document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
});

/**
 * Funcion para encriptar el texto
 * @param {string} texto Texto a encriptar
 */
function encriptar(texto) {
    
}