//Balao inicial de bem vindo
document.getElementById('bem-vindo-button').addEventListener('click', function () {
    document.querySelector('.janela-bv').style.display = 'none';
});

// Arrays para armazenar notas e nomes
const notas = [];
const nomes = [];
var counter = 0; //Counter para contar o numero dos membros

// Obtendo os botões do HTML
const btnAdicionar = document.getElementById('btnAdicionar');
const btnRemover = document.getElementById('btnRemover');
const btnLimpar = document.getElementById('btnLimpar');

btnAdicionar.addEventListener('click', adicionar);
btnRemover.addEventListener('click', remover);
btnLimpar.addEventListener('click', limpar);

// Funções para adicionar, remover e limpar notas e nomes
function adicionar() {
    var nome = document.getElementById("NOME").value;
    var nota = document.getElementById("NOTA").value;

    // Verifica se o campo de nota está vazio ou não é um número
    if (nota === "" || isNaN(nota)) {
        alert("Por favor, preencha o campo da nota.");
        document.getElementById("NOTA").value = "";
        return;
    }

    //Adiciona a nota ao array de notas
    notas.push(nota);
    document.getElementById("NOTA").value = "";   //notaS é uma array que armazena as nota
    console.log("Notas:", notas);

    //Adiciona o nome ao array de nomes, se o campo estiver vazio, adiciona um nome padrão
    if (nome !== "") {
        nomes.push(nome);
        document.getElementById("NOME").value = "";
        console.log("Nomes:", nomes);
        counter++; // Incrementa o contador para o próximo membro
    } else {
        nomes.push("Membro " + (counter + 1)); // Adiciona um nome padrão se o campo estiver vazio
        console.log("Nomes:", nomes);
        counter++; // Incrementa o contador para o próximo membro
    }

    //Imprimindo o nome e a nota juntos
    document.getElementById("LISTA_COMBINADA").innerHTML = nomes.map((nome, index) => `${nome}: ${notas[index]}`).join("<br>");
    console.log("Lista combinada atualizada.");
    media(); // Chama a função para calcular a média após adicionar uma nova nota
}

function remover() {
    // Verifica se há membros registrados antes de tentar remover
    if (notas.length > 0) {
        notas.pop();
        console.log("Notas:", notas);
        nomes.pop();
        console.log("Nomes:", nomes);
        // Verifica se ainda há notas após a remoção, caso não tenha, zerar a média
        if (notas.length === 0) {
            document.getElementById("MEDIA").innerHTML = "";
        }
        else {
            media(); // Atualiza a média se ainda houver notas
        }
    } else {
        alert("Nenhum membro foi registrado.");
    }

    counter--; // Decrementa o contador ao remover um membro
    //Imprimindo o nome e a nota juntos
    document.getElementById("LISTA_COMBINADA").innerHTML = nomes.map((nome, index) => `${nome}: ${notas[index]}`).join("<br>");
    console.log("Lista combinada atualizada.");
}


function limpar() {
    notas.length = 0; // Limpa o array de notas
    nomes.length = 0; // Limpa o array de nomes
    counter = 0; // Reseta o contador
    document.getElementById("NOME").value = "";
    document.getElementById("NOTA").value = "";
    console.log("Notas e Nomes limpos.");
    //Imprimindo o nome e a nota juntos
    document.getElementById("LISTA_COMBINADA").innerHTML = nomes.map((nome, index) => `${nome}: ${notas[index]}`).join("<br>");
    document.getElementById("MEDIA").innerHTML = "";
    console.log("Lista combinada atualizada.");
}

function media() {
    const soma = notas.reduce((acc, nota) => acc + parseFloat(nota), 0);
    const media = soma / notas.length;
    document.getElementById("MEDIA").innerHTML = "Média: " + media.toFixed(1);
    console.log("Média calculada:", media, notas);

}