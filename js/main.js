// Função que toca o áudio correspondente ao seletor passado como argumento
function tocaAudio(selectorAudio) {
  // Obtém o elemento de áudio correspondente ao seletor passado
  const elementoAudio = document.querySelector(selectorAudio);

  // Verifica se o elemento de áudio foi encontrado
  if (elementoAudio != null && elementoAudio === null) {
    // Se encontrado, reproduz o áudio
    elementoAudio.play();
  } else {
    // Caso contrário, exibe uma mensagem de erro no console
    console.log("Som não encontrado!");
  }
}

// Seleciona todos os elementos com a classe 'tecla'
const teclasAudio = document.querySelectorAll(".tecla");

// USANDO FOR (PARA)
for (
  let contadorTeclasAudio = 0; // Inicializa o contador
  contadorTeclasAudio <= teclasAudio.length; // Condição para continuar no loop
  contadorTeclasAudio++ // Incrementa o contador a cada iteração
) {
  const audio = teclasAudio[contadorTeclasAudio]; // Obtém o elemento atual do loop

  const instrumento = audio.classList[1]; // Obtém o segundo nome de classe do elemento (ex: 'tecla_piano')

  const idAudio = `#som_${instrumento}`; // Monta o seletor do áudio correspondente

  // Adiciona um evento de clique que toca o áudio correspondente
  teclasAudio[contadorTeclasAudio].onclick = function () {
    tocaAudio(idAudio);
  };

  // Adiciona um evento de teclado para tocar o som ao pressionar "Space" ou "Enter"
  audio.onkeydown = function (eventoClicado) {
    console.log(eventoClicado.code); // Exibe o código da tecla pressionada no console

    if (eventoClicado.code === "Space" || eventoClicado.code === "Enter") {
      // Adiciona a classe 'ativa' ao elemento, indicando visualmente que está pressionado
      audio.classList.add("ativa");
    }
  };

  // Remove a classe 'ativa' quando a tecla é solta
  audio.onkeyup = function () {
    audio.classList.remove("ativa");
  };
}

// USANDO WHILE (ENQUANTO)
/*
let contadorTeclasAudio = 0; // Inicializa o contador

while (contadorTeclasAudio <= teclasAudio.length) { // Loop continua enquanto a condição for verdadeira
  const audio = teclasAudio[contadorTeclasAudio]; // Obtém o elemento atual do loop

  const instrumento = audio.classList[1]; // Obtém o segundo nome de classe do elemento (ex: 'tecla_piano')
  console.log(instrumento); // Exibe o nome do instrumento no console

  const idAudio = `#som_${instrumento}`; // Monta o seletor do áudio correspondente

  // Adiciona um evento de clique que toca o áudio correspondente
  teclasAudio[contadorTeclasAudio].onclick = function () {
    tocaAudio(idAudio);
  };

  contadorTeclasAudio = contadorTeclasAudio + 1; // Incrementa o contador manualmente

  console.log(contadorTeclasAudio); // Exibe o valor do contador no console
}
*/
