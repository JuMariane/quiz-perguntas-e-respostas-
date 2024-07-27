 
/**
 * # quiz-perguntas-e-respostas-
Um Projeto de Quiz (perguntas e respostas) simples para treinar html e javascript.

## Objetivo
O objetivo desse projeto é treinar html e javascript, criando um quiz simples de perguntas e respostas.

## Tecnologias
- HTML
- CSS
- JavaScript

## Como funciona
O usuário deve responder corretamente as perguntas para ganhar pontos. Se errar, perde pontos. Se o usuário chegar a 40 pontos, ganha o jogo. Se chegar a 0 pontos, perde o jogo.

## Como rodar o projeto
Basta abrir o arquivo index.html no seu navegador.
ou acessar o link: https://quiz-perguntas-e-respostas.netlify.app/
 */
//começo:
perguntas = [
  {
    pergunta: "Qual a capital do Brasil?",
    resposta: "brasilia",
  },
  {
    pergunta: "Qual a capital da França?",
    resposta: "paris",
  },
  {
    pergunta: "Qual a capital da Argentina?",
    resposta: "buenos aires",
  },
  {
    pergunta: "Qual a capital do Chile?",
    resposta: "santiago",
  },
  //Faça mais 20 perguntas sobre coisas aleatórias

  {
    pergunta: "Quanto é 93 + 24?",
    resposta: "117",
  },
  { pergunta: "Quanto é 12 x 12?", resposta: "144" },
  { pergunta: "Quanto é 9 x 9?", resposta: "81" },
  { pergunta: "Onde fica a Torre Eiffel?", resposta: "paris" },
  { pergunta: "Onde fica o Big Ben?", resposta: "londres" },
  { pergunta: "Onde fica a Estátua da Liberdade?", resposta: "nova york" },
  { pergunta: "Onde fica o Cristo Redentor?", resposta: "rio de janeiro" },
  { pergunta: "Onde fica o Coliseu?", resposta: "roma" },
  { pergunta: "Quem pintou a Mona Lisa?", resposta: "davinci" },
  {
    pergunta: "Qual cachorro é conhecido por ser o mais inteligente?",
    resposta: "border collie",
  },
  { pergunta: "Qual é o maior planeta do sistema solar?", resposta: "jupiter" },
  {
    pergunta: "Qual é o menor planeta do sistema solar?",
    resposta: "mercurio",
  },
  { pergunta: "Qual é o planeta mais próximo do sol?", resposta: "mercurio" },
  { pergunta: "Qual é o planeta mais distante do sol?", resposta: "netuno" },
  { pergunta: "Qual é o maior animal do mundo?", resposta: "baleia azul" },
];
//sort perguntas in random order
perguntas.sort(() => Math.random() - 0.5);

//função para mostrar uma pergunta que quando tocar no botão "próximo" irá corrigir o input, pontuar e mostrar a resposta. Quando clicar no próximo de novo irá mostrar a próxima pergunta
let perguntaAtual = 0;
var pontos = 15;
function mostrarPergunta() {
  let pergunta = perguntas[perguntaAtual];
  let resposta = document.getElementById("resposta").value;
  console.log(resposta.toLowerCase().trim());
  console.log(pergunta.resposta.toLowerCase().trim());
  if (
    perguntaAtual != 0 &&
    resposta.toLowerCase().trim() ==
      perguntas[perguntaAtual - 1].resposta.toLowerCase().trim()
  ) {
    pontos = pontos + 10;
    document.getElementById("resposta-correta").style.backgroundColor =
      "lightgreen";
    console.log("correto");
    if (pontos >= 40) {
      alert(" Você ganhou! Parabéns!");
      perguntas.sort(() => Math.random() - 0.5);
      perguntaAtual = 0;
      pontos = 10;
    }
  } else {
    document.getElementById("resposta-correta").style.backgroundColor =
      "lightcoral";
    pontos = pontos - 5;
    if (pontos <= 0) {
      pontos = 10;
      alert("Você perdeu todos os pontos! Tente novamente");
      perguntas.sort(() => Math.random() - 0.5);
      perguntaAtual = 0;
    }
  }
  document.getElementById("pergunta").innerText = pergunta.pergunta;
  document.getElementById("resposta").value = "";
  document.getElementById("pontos").innerText = pontos;
  if (perguntaAtual != 0) {
    document.getElementById("resposta-correta-title").style.display = "block";
    document.getElementById("resposta-correta").innerText =
      perguntas[perguntaAtual - 1].resposta;
  } else {
    document.getElementById("resposta-correta-title").style.display = "none";
  }

  perguntaAtual++;
}

//função para mostrar a primeira pergunta
mostrarPergunta();

//função para mostrar a próxima pergunta
document.getElementById("proximo").addEventListener("click", mostrarPergunta);
document.getElementById("resposta").addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    mostrarPergunta();
  }
});

//fim
