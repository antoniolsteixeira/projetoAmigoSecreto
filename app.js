let amigos = [];
const inputAmigo = document.getElementById('amigo');
const buttonAdd = document.querySelector('.button-add');

inputAmigo.addEventListener('input', function () {
    if (this.value.trim() !== '') {
        buttonAdd.classList.add('active');
    } else {
        buttonAdd.classList.remove('active');
    }
});

function adicionarAmigo() {
    if (inputAmigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(inputAmigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('listaAmigos');
    amigos.push(inputAmigo.value);
    if (lista.textContent == '') {
        lista.textContent = inputAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + inputAmigo.value;
    }
    inputAmigo.value = '';

    // Para garantir que o botão volte ao estado original após adicionar
    buttonAdd.classList.remove('active');
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert('Não há mais amigos para sortear!');
        return;
    }

    let sorteio = document.getElementById('resultado');

    // Sorteia um índice aleatório no array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let nomeSorteado = amigos[indiceAleatorio];

    // Exibe a mensagem completa com o nome sorteado
    sorteio.innerHTML = `Parabéns! Seu amigo oculto é ${nomeSorteado}`;

    // Remove o nome sorteado do array
    amigos.splice(indiceAleatorio, 1);
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    buttonAdd.classList.remove('active');
    inputAmigo.value = '';
}