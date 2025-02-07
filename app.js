// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        limpiarIngresarAmigos();
        limpiarResultado();
        actualizarAmigos();
    }
}


// Recorre el array amigos y crea un elemento 'li' por cada uno. Los coloca en el objeto con id listaAmigos en index.html
function actualizarAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    limpiarAmigosSorteados();
    for (let index = 0; index < amigos.length; index++) {
        let li = document.createElement('li');
        li.textContent = amigos[index];
        listaAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length == 0) {
        alert('No es posible sortear si no ingresas amigos.')
    } else {
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        resultado.innerHTML = `El amigo sorteado secreto es : ${amigos[indiceAleatorio]}`;
        limpiarAmigosSorteados();
        amigos = []; // Vaciamos el array de amigos para volver a jugar.
    }
}



function limpiarIngresarAmigos(){
    document.getElementById('amigo').value = "";
}


function limpiarAmigosSorteados() {
    listaAmigos.innerHTML = "";
}

function limpiarResultado() {
    resultado.innerHTML = "";
}