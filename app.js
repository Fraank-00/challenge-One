// Array para almacenar los nombres de amigos
const amigos = [];

// Referencias a los elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un amigo
function agregarAmigo() {
    const nombreAmigo = inputAmigo.value.trim(); // Quitar espacios innecesarios

    // Validar que el campo no esté vacío
    if (!nombreAmigo) {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Añadir el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista de amigos
    renderizarListaAmigos();
}

// Función para renderizar la lista de amigos
function renderizarListaAmigos() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';

    // Crear elementos <li> para cada amigo
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item'; // Aplicar una clase para estilo
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
