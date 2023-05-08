//evento para el input de texto id="texto"
document.getElementById("texto").addEventListener("input", function () {
    //cuando se ingrese texto, no permitir caracteres especiales
    var texto = document.getElementById("texto").value;
    var textoSinCaracteresEspeciales = texto.replace(/[^\w\s]/gi, '');
    document.getElementById("texto").value = textoSinCaracteresEspeciales;
});

//Ocultar el <p> con el texto encriptado
document.getElementById("texto-encriptado").style.display = "none";

// Llamar a la funcion encriptar cuando se presione el boton "boton-encriptar"
document.getElementById("boton-encriptar").addEventListener("click", function () {
    //evitar envio de formulario
    event.preventDefault();
    
    // Obtener el texto a encriptar
    var texto = document.getElementById("texto").value;

    //si hay texto 
    if (texto != "") {
        // Encriptar el texto
        var textoEncriptado = encriptar(texto);
        //ocultar imagen del muñeco 
        document.getElementById("muñeco").style.display = "none";
        //ocultar mensaje-sin-texto
        document.getElementById("mensaje-sin-texto").style.display = "none";
        // Mostrar el texto encriptado
        document.getElementById("texto-encriptado").style.display = "block";
        document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
        
    }
});

/**
 * Funcion para encriptar el texto
 * @param {string} texto Texto a encriptar
 */
function encriptar(texto) {
    /**
     * Las "llaves" de encriptación que utilizaremos son las siguientes:
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"
     */
    var textoEncriptado = texto.replace(/e/gi, "enter");
    textoEncriptado = textoEncriptado.replace(/i/gi, "imes");
    textoEncriptado = textoEncriptado.replace(/a/gi, "ai");
    textoEncriptado = textoEncriptado.replace(/o/gi, "ober");
    textoEncriptado = textoEncriptado.replace(/u/gi, "ufat");

    return textoEncriptado;
}