//evento para el input de texto id="texto"
document.getElementById("texto").addEventListener("input", function () {
    //cuando se ingrese texto, no permitir caracteres especiales
    var texto = document.getElementById("texto").value;
    var textoSinCaracteresEspeciales = texto.replace(/[^\w\s]/gi, '');
    document.getElementById("texto").value = textoSinCaracteresEspeciales;
});

//Ocultar el <p> con el texto encriptado y boton de copiar
document.getElementById("texto-encriptado").style.display = "none";
document.getElementById("boton-copiar").style.display = "none";

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
        // Mostrar el texto encriptado y boton de copiar
        document.getElementById("texto-encriptado").style.display = "block";
        document.getElementById("texto-encriptado").innerHTML = textoEncriptado;
        document.getElementById("boton-copiar").style.display = "block";
    }
});

// Llamar a la funcion copiar cuando se presione el boton "boton-copiar"
document.getElementById("boton-copiar").addEventListener("click", function () {
    //evitar envio de formulario
    event.preventDefault();
    // Obtener el texto a copiar
    var texto = document.getElementById("texto-encriptado").innerHTML;
    // Copiar el texto en el portapapeles del sistema
    navigator.clipboard.writeText(texto);
});


// Llamar a la funcion desencriptar cuando se presione el boton "boton-desencriptar"
document.getElementById("boton-desencriptar").addEventListener("click", function () {
    //evitar envio de formulario
    event.preventDefault();

    // Obtener el texto a desencriptar
    var texto = document.getElementById("texto").value;

    //si hay texto
    if (texto != "") {
        // Desencriptar el texto
        var textoDesencriptado = desencriptar(texto);
        //ocultar imagen del muñeco
        document.getElementById("muñeco").style.display = "none";
        //ocultar mensaje-sin-texto
        document.getElementById("mensaje-sin-texto").style.display = "none";

        // Mostrar el texto desencriptado
        document.getElementById("texto-encriptado").style.display = "block";
        document.getElementById("texto-encriptado").innerHTML = textoDesencriptado;
        document.getElementById("boton-copiar").style.display = "block";
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

/**
 * Funcion para desencriptar el texto
 * @param {string} texto Texto a desencriptar
 */
function desencriptar(texto) {
    /**
     * Las "llaves" de encriptación que utilizaremos son las siguientes:
        La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"
     */
    var textoDesencriptado = texto.replace(/enter/gi, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/gi, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/gi, "a");
    textoDesencriptado = textoDesencriptado.replace(/ober/gi, "o");
    textoDesencriptado = textoDesencriptado.replace(/ufat/gi, "u");

    return textoDesencriptado;
}