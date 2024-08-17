let temas = {};
let palavraSecreta = '';
let letrasAcertadas = [];
let letrasErradas = [];
let tentativas = 0;
const maxTentativas = 6;

function carregarTemas() {
    fetch('palavras.json')
        .then(response => response.json())
        .then(data => {
            temas = data;
            const temaSelect = document.getElementById('tema');
            for (let tema in temas) {
                let option = document.createElement('option');
                option.value = tema;
                option.textContent = tema.charAt(0).toUpperCase() + tema.slice(1);
                temaSelect.appendChild(option);
            }
        })
        .catch(error => console.error('Erro ao carregar os temas:', error));
}

function escolherPalavra(tema) {
    const palavras = temas[tema];
    const index = Math.floor(Math.random() * palavras.length);
    palavraSecreta = palavras[index];
}

function atualizarDisplay() {
    const forca = document.getElementById('forca');
    const palavra = document.getElementById('palavra');
    const letrasErradasDisplay = document.getElementById('letras-erradas');
    const mensagem = document.getElementById('mensagem');

    let palavraFormatada = '';
    for (let letra of palavraSecreta) {
        if (letrasAcertadas.includes(letra)) {
            palavraFormatada += letra + ' ';
        } else {
            palavraFormatada += '_ ';
        }
    }
    palavra.textContent = palavraFormatada.trim();

    letrasErradasDisplay.textContent = `Letras erradas: ${letrasErradas.join(', ')}`;
    forca.textContent = `Tentativas restantes: ${maxTentativas - tentativas}`;
    
    if (!palavraFormatada.includes('_')) {
        mensagem.textContent = 'Parabéns, você ganhou!';
        finalizarJogo();
    } else if (tentativas >= maxTentativas) {
        mensagem.textContent = `Você perdeu! A palavra era '${palavraSecreta}'.`;
        finalizarJogo();
    }
}

function tentarLetra() {
    const inputLetra = document.getElementById('input-letra');
    const letra = inputLetra.value.toLowerCase();
    
    if (letra && !letrasAcertadas.includes(letra) && !letrasErradas.includes(letra)) {
        if (palavraSecreta.includes(letra)) {
            letrasAcertadas.push(letra);
        } else {
            letrasErradas.push(letra);
            tentativas++;
        }
        atualizarDisplay();
    }
    
    inputLetra.value = '';
    inputLetra.focus();
}

function finalizarJogo() {
    document.getElementById('input-letra').disabled = true;
    document.getElementById('botao-tentar').disabled = true;
    document.getElementById('botao-reiniciar').style.display = 'block';
}

function reiniciarJogo() {
    letrasAcertadas = [];
    letrasErradas = [];
    tentativas = 0;
    document.getElementById('input-letra').disabled = true;
    document.getElementById('botao-tentar').disabled = true;
    document.getElementById('botao-reiniciar').style.display = 'none';
    document.getElementById('mensagem').textContent = '';
    document.getElementById('selecao-tema').style.display = 'block';
    document.getElementById('forca').textContent = '';
    document.getElementById('palavra').textContent = '';
    document.getElementById('letras-erradas').textContent = '';
}

function iniciarJogo() {
    const temaSelecionado = document.getElementById('tema').value;
    escolherPalavra(temaSelecionado);
    atualizarDisplay();
    document.getElementById('input-letra').disabled = false;
    document.getElementById('botao-tentar').disabled = false;
    document.getElementById('input-letra').focus();
    document.getElementById('selecao-tema').style.display = 'none';
}

document.getElementById('botao-iniciar').addEventListener('click', iniciarJogo);
document.getElementById('botao-tentar').addEventListener('click', tentarLetra);
document.getElementById('botao-reiniciar').addEventListener('click', reiniciarJogo);

carregarTemas();
