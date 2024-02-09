const perguntas = [
  {
    pergunta: "Em que ano o Sport Club Corinthians Paulista foi fundado?",
    respostas: [
      "1910",
      "1912",
      "1920",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o apelido popular do Corinthians?",
    respostas: [
      "Galo",
      "Timão",
      "Leão",
    ],
    correta: 1
  },
  {
    pergunta: "Quantas vezes o Corinthians venceu a Copa Libertadores da América?",
    respostas: [
      "1",
      "2",
      "3",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o estádio que o Corinthians manda a maioria de seus jogos?",
    respostas: [
      "Maracanã",
      "Allianz Parque",
      "Arena Corinthians",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o maior artilheiro da história do Corinthians?",
    respostas: [
      "Ronaldo Nazário",
      "Sócrates",
      "Marcelinho Carioca",
    ],
    correta: 2
  },
  {
    pergunta: "Em qual ano o Corinthians conquistou o Mundial de Clubes da FIFA?",
    respostas: [
      "2000",
      "2012",
      "2014",
    ],
    correta: 1
  },
  {
    pergunta: "Qual técnico comandou o Corinthians na conquista do Campeonato Brasileiro de 2015?",
    respostas: [
      "Tite",
      "Mano Menezes",
      "Adenor Leonardo Bacchi",
    ],
    correta: 0
  },
  {
    pergunta: "Qual jogador ficou conhecido como 'Pé de Anjo' no Corinthians?",
    respostas: [
      "Neto",
      "Marcelinho Carioca",
      "Rivelino",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi a primeira competição internacional conquistada pelo Corinthians?",
    respostas: [
      "Recopa Sul-Americana",
      "Copa Sul-Americana",
      "Copa Rio Internacional",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é considerado o maior ídolo da Fiel Torcida Corinthians?",
    respostas: [
      "Ronaldo Nazário",
      "Sócrates",
      "Rivellino",
    ],
    correta: 2
  },
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
   
   
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)  
  }
  
