
const perguntas = [
  {
    pergunta: "Qual é o animal mais rápido do mundo?",
    respostas: [
      "Leão",
      "Pombo",
      "Guepardo"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o país mais populoso do mundo?",
    respostas: [
      "Índia",
      "Estados Unidos",
      "China"
    ],
    correta: 2
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o elemento mais abundante na crosta terrestre?",
    respostas: [
      "Oxigênio",
      "Ferro",
      "Silício"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a capital do Canadá?",
    respostas: [
      "Toronto",
      "Ottawa",
      "Vancouver"
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi o primeiro ser humano a viajar para o espaço?",
    respostas: [
      "Yuri Gagarin",
      "Neil Armstrong",
      "Buzz Aldrin"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a montanha mais alta do mundo?",
    respostas: [
      "Monte Everest",
      "K2",
      "Makalu"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maior ilha do mundo?",
    respostas: [
      "Groenlândia",
      "Austrália",
      "Ilha de Baffin"
    ],
    correta: 0
  },
  {
    pergunta: "Quem escreveu 'A Origem das Espécies'?",
    respostas: [
      "Isaac Newton",
      "Charles Darwin",
      "Albert Einstein"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a velocidade da luz?",
    respostas: [
      "300.000 km/s",
      "200.000 km/s",
      "150.000 km/s"
    ],
    correta: 0
  }
];
  
  // Pegando quiz e template do HTML
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  // Criação do dado das perguntas corretas
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    
  // nomeando o quizItem como o conteúdo do template, true.
     const quizItem = template.content.cloneNode(true)
  // atribuindo o item.pergunta no h3, como título da pergunta
     quizItem.querySelector("h3").textContent = item.pergunta
  
  
  // Nova estrutura de repetição para as respostas
     for(let resposta of item.respostas) {
       const dt = quizItem.querySelector("dl dt").cloneNode(true)
       dt.querySelector("span").textContent = resposta
  // Abaixo para adicionar um input para cada pergunta
       dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
  // Selecionando e atualizando o valor da resposta
       dt.querySelector("input").value = item.respostas.indexOf(resposta)
  // Criando o evento de selecionar o input
       dt.querySelector("input").onchange = (event) => {
  // Mostrando o target do evento
         const estaCorreta = event.target.value == item.correta
  // Adicionando o item caso acertar e remover caso errar
         corretas.delete(item)
         if (estaCorreta) {
           corretas.add(item)
         }
  // Contador de corretas no final da página
         mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
       }
  
  // Colocando a resposta na tela
       quizItem.querySelector("dl").appendChild(dt)
     }
  // Removendo o resposta A (após utilizado para copiar as respostas)
     quizItem.querySelector("dl dt").remove()
  
  
  // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  } 