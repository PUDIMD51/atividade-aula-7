function mostrarMensagem('Muito obrigado por ler meu artigo!') {
  const mensagens = [
    "'Muito obrigado por ler meu artigo!'"
  ];

  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
}
