const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para atribuição de valor em JavaScript?",
      respostas: [
        "=",
        ":",
        "=="
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '2' + 2 em JavaScript?",
      respostas: [
        "22",
        "4",
        "Erro"
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toFloat()",
        "convertToInt()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código: console.log(typeof undefined);",
      respostas: [
        "Undefined",
        "null",
        "undefined"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "add()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para verificar se dois valores são iguais em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função usada para criar um novo elemento HTML em JavaScript?",
      respostas: [
        "createNewElement()",
        "createElement()",
        "newElement()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "deleteLast()"
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