// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto:
//Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que
// o botão Console for pressionado.

//function ("verificarChute"){
//console.log(apertei botao);
//}

function verificarChute() {
  console.log('apertei botao');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre
//que o botão Alerta for pressionado.

function verificarAlerta() {
  console.log('Eu amo JS');
}

// Crie uma função que é executada quando o botão prompt é clicado,
// perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto:
//Estive em {cidade} e lembrei de você.

function verificarCidade() {
  let cidade = prompt('De que cidade você é?');
  alert(`Estive em ${cidade} e lembrei de você`);
  console.log(cidade);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba
// o resultado da soma em um alerta.

//function verificarSoma() {
// let numero1 = prompt('Digite o primeiro numero inteiro');
// let numero2 = prompt('Digite o segundo numero inteiro');
// let soma = numero1 + numero2;
// alert(`O resultado da soma é ${soma}`);
// console.log(soma);
//}

function verificarSoma() {
  let numero1 = prompt('Digite o primeiro número inteiro');
  let numero2 = prompt('Digite o segundo número inteiro');

  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);

  let soma = numero1 + numero2;

  alert(`O resultado da soma é ${soma}`);
  console.log(soma);
}
