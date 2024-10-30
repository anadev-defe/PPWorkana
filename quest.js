const perguntas = [
    {
        pergunta: "1. Qual a principal diferença entre var, let e const?",
        opcoes: ["a) Todas declaram variáveis com escopo global.", 
                 "b) var e let permitem reatribuição, enquanto const não.", 
                 "c) const permite reatribuição, enquanto var e let não.", 
                 "d) Não há diferença entre elas."],
        resposta: 1
    },
    {
        pergunta: "2. O que é hoisting em JavaScript?",
        opcoes: ["a) O processo de elevar variáveis para o topo do escopo antes da execução.", 
                 "b) A criação de funções anônimas.", 
                 "c) A capacidade de modificar objetos imutáveis.", 
                 "d) A forma como o JavaScript interpreta o código assíncrono."],
        resposta: 0
    },
    {
        pergunta: "3. Quais os tipos de dados primitivos em JavaScript?",
        opcoes: ["a) string, number, boolean, null, undefined, symbol", 
                 "b) object, array, function", 
                 "c) string, number, boolean, object, array", 
                 "d) Apenas string e number"],
        resposta: 0
    },
    {
        pergunta: "4. Qual a principal característica de uma arrow function?",
        opcoes: ["a) sintaxe mais concisa e escopo léxico.", 
                 "b) Sempre retorna um valor.", 
                 "c) Não pode ser usada com métodos de array.", 
                 "d) É a única forma de criar funções em JavaScript moderno."],
        resposta: 0
    },
    {
        pergunta: "5. O que é um closure em JavaScript?",
        opcoes: ["a) Uma função que não possui acesso ao seu escopo léxico.", 
                 "b) Um objeto que armazena dados de sessão.",
                 "c) Uma função que tem acesso ao seu próprio escopo e ao escopo no qual foi definida.", 
                 "d) Um tipo de dado primitivo em JavaScript.",
                ],
        resposta: 2
    },
    {
        pergunta: "6. O que o this representa em JavaScript?",
        opcoes: ["a) Uma palavra-chave que sempre se refere ao objeto global.", 
                 "b) Um ponteiro para a função que está sendo executada.",
                 "c) Um objeto que armazena informações sobre a execução atual.", 
                 "d) Um objeto que se refere ao objeto que está chamando a função.",
                ],
        resposta: 3
    },
    {
        pergunta: "7. Qual a principal diferença entre os operadores de comparação == e === em JavaScript?",
        opcoes: ["a) O operador == realiza uma comparação mais rigorosa, verificando tanto o valor quanto o tipo dos operandos.", 
                 "b) O operador === realiza uma conversão de tipo antes de comparar os valores.",
                 "c) O operador == realiza uma comparação mais flexível, permitindo a conversão de tipos antes de comparar os valores.", 
                 "d) Não há diferença entre os dois operadores, eles sempre retornam o mesmo resultado.",
                ],
        resposta: 2
    },
    {
        pergunta: "8. O que é o DOM e qual sua principal função em JavaScript?",
        opcoes: ["a) Uma linguagem de programação utilizada para criar interfaces web.", 
                 "b) Uma representação da estrutura de um documento HTML em forma de objeto, permitindo sua manipulação através de JavaScript.",
                 "c) Um protocolo de comunicação entre navegador e servidor.", 
                 "d) Uma biblioteca JavaScript para criar animações.",
                ],
        resposta: 1
    },
    {
        pergunta: "9. Qual das seguintes opções representa uma forma de criar um objeto em JavaScript?",
        opcoes: ["a) Usando a palavra-chave.",
                 "b) Utilizando a notação literal de objeto.",
                 "c) Através de construtores.", 
                 "d) Todas as alternativas estão corretas.",
                ],
        resposta: 3
    },
    {
        pergunta: "10. Qual das alternativas melhor descreve o conceito de protótipos em JavaScript?",
        opcoes: ["a) Uma forma de criar classes semelhantes a outras linguagens de programação, com herança e polimorfismo.",
                "b) Um mecanismo que permite que objetos herdem propriedades e métodos de outros objetos, formando uma cadeia de protótipos.", 
                "c) Uma estrutura de dados utilizada para armazenar as propriedades de um objeto.", 
                "d) Uma função especial que cria novos objetos.",
                ],
        resposta: 1
    },
    {
        pergunta: "11. O que é uma Promise em JavaScript?",
        opcoes: ["a) Uma função que retorna um valor imediatamente.",
                "b) Um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona.", 
                "c) Um tipo de dado primitivo como string ou number.", 
                "d) Uma estrutura de dados utilizada para armazenar informações de forma organizada.",
                ],
        resposta: 1
    },
    {
        pergunta: "12. Qual das alternativas abaixo descreve a principal diferença entre Fetch e XMLHttpRequest em JavaScript?",
        opcoes: ["a) Fetch é mais antigo e menos eficiente que XMLHttpRequest.",
                "b) XMLHttpRequest é mais fácil de usar e oferece mais funcionalidades que Fetch.", 
                "c) Fetch é uma API mais moderna, baseada em Promises, enquanto XMLHttpRequest utiliza callbacks.", 
                "d) Não há diferença significativa entre os dois, ambos servem para fazer requisições HTTP.",
                ],
        resposta: 2
    },
    {
        pergunta: "13. Qual das alternativas abaixo descreve corretamente os conceitos de event bubbling e event capturing?",
        opcoes: ["a) Event bubbling é quando um evento se propaga para cima na árvore DOM, enquanto event capturing é quando um evento se propaga para baixo.",
                "b) Event bubbling e event capturing são sinônimos e descrevem o mesmo processo de propagação de eventos.", 
                "c) Event capturing é quando um evento se propaga para cima na árvore DOM, enquanto event bubbling é quando um evento se propaga para baixo.", 
                "d) Event bubbling e event capturing são mecanismos internos do navegador e não podem ser controlados pelos desenvolvedores.",
                ],
        resposta: 0
    },
    {
        pergunta: "14. Qual das alternativas abaixo descreve corretamente o funcionamento do operador spread (...) em JavaScript?",
        opcoes: ["a) O operador spread permite criar novas funções com base em funções existentes.",
                "b) O operador spread é utilizado para concatenar strings de forma mais eficiente.", 
                "c) O operador spread expande um iterável (como um array) em elementos individuais em um contexto onde múltiplos elementos são esperados.", 
                "d) O operador spread serve apenas para criar cópias superficiais de objetos.",
                ],
        resposta: 2
    },
    {
        pergunta: "15. Qual das alternativas abaixo descreve a maneira correta de criar um módulo em JavaScript?",
        opcoes: ["a) Definir um objeto global e adicionar as funções e variáveis desejadas a ele.",
                "b) Utilizar a palavra-chave module para declarar um novo módulo e exportar as funcionalidades necessárias.", 
                "c) Envolver o código do módulo em uma função e retornar um objeto com as exportações.", 
                "d) Todas as alternativas estão corretas.",
                ],
        resposta: 2
    },
    // Adicione mais perguntas aqui, totalizando 20.
];

let indicePergunta = 0;
let tempo = 120 * 60; // 2 horas em segundos
let pontuacao = 0;
let timerInterval;
let nomeCandidato = '';

function iniciarTeste() {
    nomeCandidato = document.getElementById('nome').value;
    if (!nomeCandidato) {
        alert("Por favor, insira seu nome.");
        return;
    }

    document.getElementById('perguntaContainer').style.display = 'block';
    mostrarPergunta();
    iniciarTemporizador();
}

function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePergunta];
    document.getElementById('perguntaTexto').innerText = perguntaAtual.pergunta;

    const opcoesContainer = document.getElementById('opcoes');
    opcoesContainer.innerHTML = ''; // Limpa opções anteriores

    perguntaAtual.opcoes.forEach((opcao, index) => {
        const button = document.createElement('button');
        button.innerText = opcao;
        button.onclick = () => escolherResposta(index);
        opcoesContainer.appendChild(button);
    });


}

function escolherResposta(indice) {
    const perguntaAtual = perguntas[indicePergunta];
    // Verifica se a resposta está correta
    if (indice === perguntaAtual.resposta) {
        pontuacao++;
    }

    indicePergunta++;
    if (indicePergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        finalizarTeste();
    }

}

function iniciarTemporizador() {
    timerInterval = setInterval(() => {
        tempo--;
        const minutos = Math.floor(tempo / 60);
        const segundos = tempo % 60;
        document.getElementById('timer').innerText = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

        if (tempo <= 0) {
            clearInterval(timerInterval);
            alert('O tempo acabou! Teste finalizado.');
            finalizarTeste();
        }
    }, 1000);
}

function finalizarTeste() {
    clearInterval(timerInterval);
    alert(`Teste encerrado! Sua pontuação é: ${pontuacao} de ${perguntas.length}`);
    alert(`Candidato: ${nomeCandidato}\nPontuação: ${pontuacao}\nVocê completou todas as perguntas. Obrigado por participar!`);
    
    if (pontuacao >= 9) { // Por exemplo, 15 de 20 para obter o certificado
        alert("Parabéns! Você está qualificado para receber um certificado.");
    } else {
        alert("Infelizmente, você não atingiu a pontuação necessária para o certificado. Clique em Voltar ao Menu");
    }
}
function voltarAoMenu() {
    window.location.href = "index.html"; 
}


