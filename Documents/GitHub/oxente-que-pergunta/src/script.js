// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Qual nome da capital de Paraíba?",
    respostas: [
      {opcao: "Salvador", correto: false},
      {opcao: "Rio de Janeiro", correto: false},
      {opcao: "João Pessoa", correto: true}]
    },
  {
    pergunta: "Qual cidade da Paraíba é amplamente reconhecida por realizar O Maior São João do Mundo?",
    respostas: [
      {opcao: "Patos", correto: false},
      {opcao: "Campina Grande", correto: true},
      {opcao: "Solânea", correto: false}]
    },
  {
    pergunta: "Qual comida regional típica do nordeste, virou Patrimônio Cultural Imaterial da Humanidade?",
    respostas: [
      {opcao: "Cuscuz", correto: true},
      {opcao: "Baião de Dois", correto: false},
      {opcao: "Buchada", correto: false}]
    },
  {
    pergunta: "Quem foi Luiz Gonzaga?",
    respostas: [
      {opcao: "Um pintor", correto: false},
      {opcao: "Um padeiro", correto: false},
      {opcao: "Um cantor", correto: true}]
    },
  {
    pergunta: "Qual das seguintes manifestações culturais é tipicamente assossiada a região Nordeste do Brasil?",
    respostas: [
      {opcao: "Tango", correto: false},
      {opcao: "Frevo", correto: true},
      {opcao: "Bumba Meu Boi", correto: false}]
    }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}!`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
