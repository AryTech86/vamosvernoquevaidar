const perguntas = [
  {
    pergunta: "Qual cidade é conhecida como a 'Rainha do Brejo'?",
    opcoes: ["Campina Grande", "Bananeiras", "Guarabira", "Sousa"],
    resposta: "Guarabira",
    curiosidade: "Guarabira é considerada a Rainha do Brejo por sua influência cultural e econômica na região."
  }
];

let indiceAtual = 0;

function carregarPergunta() {
  const p = perguntas[indiceAtual];
  document.getElementById('pergunta').textContent = p.pergunta;

  const opcoesDiv = document.getElementById('opcoes');
  opcoesDiv.innerHTML = "";

  p.opcoes.forEach(opcao => {
    const botao = document.createElement('button');
    botao.textContent = opcao;
    botao.onclick = () => verificarResposta(opcao);
    opcoesDiv.appendChild(botao);
  });

  document.getElementById('resposta').textContent = "";
  document.getElementById('proxima').style.display = "none";
}

function verificarResposta(opcaoEscolhida) {
  const p = perguntas[indiceAtual];
  const resultado = document.getElementById('resposta');
  if (opcaoEscolhida === p.resposta) {
    resultado.innerHTML = "✅ Acertou!<br><em>" + p.curiosidade + "</em>";
  } else {
    resultado.innerHTML = "❌ Errou! A resposta certa é: " + p.resposta;
  }

  document.getElementById('proxima').style.display = "block";
}

document.getElementById('proxima').onclick = () => {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    carregarPergunta();
  } else {
    document.getElementById('pergunta').textContent = "Fim do jogo!";
    document.getElementById('opcoes').innerHTML = "";
    document.getElementById('resposta').textContent = "Parabéns por jogar!";
    document.getElementById('proxima').style.display = "none";
  }
};

carregarPergunta();
