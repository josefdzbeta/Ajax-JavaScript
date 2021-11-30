
/**
 * @author Jose Angel Fernandez Betancourt
 * @license GNU GPL V3 2021
 */

'use strict'

function cargarFichero(){
    fetch ('datos1.txt')
        .then(respuesta => respuesta.text()) //Recibimos un objeto de tipo Texto
        .then(texto => document.getElementById('span1').innerHTML = texto)
}

function cargarFichero2(){
    fetch ('datos.php?nombre=JoseAngel&saldo=9999999')
        .then(respuesta => respuesta.text())
        .then(texto => document.getElementById('span2').innerHTML = texto)
}

//Con mayor control
function cargarFichero2(){
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function(){
        document.getElementById('span2').innerHTML = this.responseText
    }
    xhttp.open('GET', 'datos1.txt', true)
    xhttp.send()
}

//Detallando el control
function cargarFichero3(){
    const xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        console.log(this.readyState, this.status)
        if (this.readyState == 4 && this.status == 200){
            document.getElementById('span3').innerHTML = this.responseText
        }
    }
    xhttp.open('GET', 'datos1.txt', true)
    xhttp.send()
}