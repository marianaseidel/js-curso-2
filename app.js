let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio'

function exibirConsole() {
    console.log('O botão foi clicado');
}

function exibirAlerta() {
    alert('Eu amo JS');
}

function exibirPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma() {
    let valor1 = prompt('Digite um número');
    let valor2 = prompt('Digite outro número');
    let resultado = parseInt(valor1) + parseInt(valor2);

    alert(`O resultado da soma de ${valor1} e ${valor2} é igual a ${resultado}`);
}