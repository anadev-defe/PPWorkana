const perguntas = [
    {
        pergunta: "Qual a principal diferença entre var, let e const?",
        opcoes: ["Todas declaram variáveis com escopo global.", 
                 "var e let permitem reatribuição, enquanto const não.", 
                 "const permite reatribuição, enquanto var e let não.", 
                 "Não há diferença entre elas."],
        resposta: 1
    },
    {
        pergunta: "O que é hoisting em JavaScript?",
        opcoes: ["O processo de elevar variáveis para o topo do escopo antes da execução.", 
                 "A criação de funções anônimas.", 
                 "A capacidade de modificar objetos imutáveis.", 
                 " A forma como o JavaScript interpreta o código assíncrono."],
        resposta: 2
    },
    {
        pergunta: "Quais os tipos de dados primitivos em JavaScript?",
        opcoes: ["string, number, boolean, null, undefined, symbol", 
                 " object, array, function", 
                 " string, number, boolean, object, array", 
                 " Apenas string e number"],
        resposta: 3
    },
    {
        pergunta: "Qual a principal característica de uma arrow function?",
        opcoes: ["sintaxe mais concisa e escopo léxico.", 
                 " Sempre retorna um valor.", 
                 " Não pode ser usada com métodos de array.", 
                 " É a única forma de criar funções em JavaScript moderno."],
        resposta: 4
    },
    {
        pergunta: "O que é um closure em JavaScript?",
        opcoes: ["Uma função que não possui acesso ao seu escopo léxico.", 
                 "Um objeto que armazena dados de sessão.",
                 " Uma função que tem acesso ao seu próprio escopo e ao escopo no qual foi definida.", 
                 " Um tipo de dado primitivo em JavaScript.",
                ],
        resposta: 5
    },
    {
        pergunta: "O que o this representa em JavaScript?",
        opcoes: ["Uma palavra-chave que sempre se refere ao objeto global.", 
                 "Um ponteiro para a função que está sendo executada.",
                 "Um objeto que armazena informações sobre a execução atual.", 
                 "Um objeto que se refere ao objeto que está chamando a função.",
                ],
        resposta: 6
    },
    {
        pergunta: "Qual a principal diferença entre os operadores de comparação == e === em JavaScript?",
        opcoes: ["O operador == realiza uma comparação mais rigorosa, verificando tanto o valor quanto o tipo dos operandos.", 
                 "O operador === realiza uma conversão de tipo antes de comparar os valores.",
                 "O operador == realiza uma comparação mais flexível, permitindo a conversão de tipos antes de comparar os valores.", 
                 "Não há diferença entre os dois operadores, eles sempre retornam o mesmo resultado.",
                ],
        resposta: 7
    },
    {
        pergunta: "O que é o DOM e qual sua principal função em JavaScript?",
        opcoes: ["Uma linguagem de programação utilizada para criar interfaces web.", 
                 "Uma representação da estrutura de um documento HTML em forma de objeto, permitindo sua manipulação através de JavaScript.",
                 "Um protocolo de comunicação entre navegador e servidor.", 
                 "Uma biblioteca JavaScript para criar animações.",
                ],
        resposta: 8
    },
    {
        pergunta: "Qual das seguintes opções representa uma forma de criar um objeto em JavaScript?",
        opcoes: ["Usando a palavra-chave.",
                 "Utilizando a notação literal de objeto.",
                 "Através de construtores.", 
                 "Todas as alternativas estão corretas.",
                ],
        resposta: 9
    },
    {
        pergunta: "Qual das alternativas melhor descreve o conceito de protótipos em JavaScript?",
        opcoes: ["Uma forma de criar classes semelhantes a outras linguagens de programação, com herança e polimorfismo.",
                "Um mecanismo que permite que objetos herdem propriedades e métodos de outros objetos, formando uma cadeia de protótipos.", 
                "Uma estrutura de dados utilizada para armazenar as propriedades de um objeto.", 
                "Uma função especial que cria novos objetos.",
                ],
        resposta: 10
    },
    {
        pergunta: "O que é uma Promise em JavaScript?",
        opcoes: ["Uma função que retorna um valor imediatamente.",
                "Um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona.", 
                "Um tipo de dado primitivo como string ou number.", 
                "Uma estrutura de dados utilizada para armazenar informações de forma organizada.",
                ],
        resposta: 11
    },
    {
        pergunta: "Qual das alternativas abaixo descreve a principal diferença entre Fetch e XMLHttpRequest em JavaScript?",
        opcoes: ["Fetch é mais antigo e menos eficiente que XMLHttpRequest.",
                "XMLHttpRequest é mais fácil de usar e oferece mais funcionalidades que Fetch.", 
                "Fetch é uma API mais moderna, baseada em Promises, enquanto XMLHttpRequest utiliza callbacks.", 
                "Não há diferença significativa entre os dois, ambos servem para fazer requisições HTTP.",
                ],
        resposta: 12
    },
    {
        pergunta: "Qual das alternativas abaixo descreve corretamente os conceitos de event bubbling e event capturing?",
        opcoes: ["Event bubbling é quando um evento se propaga para cima na árvore DOM, enquanto event capturing é quando um evento se propaga para baixo.",
                "Event bubbling e event capturing são sinônimos e descrevem o mesmo processo de propagação de eventos.", 
                "Event capturing é quando um evento se propaga para cima na árvore DOM, enquanto event bubbling é quando um evento se propaga para baixo.", 
                "Event bubbling e event capturing são mecanismos internos do navegador e não podem ser controlados pelos desenvolvedores.",
                ],
        resposta: 13
    },
    {
        pergunta: "Qual das alternativas abaixo descreve corretamente o funcionamento do operador spread (...) em JavaScript?",
        opcoes: ["O operador spread permite criar novas funções com base em funções existentes.",
                "O operador spread é utilizado para concatenar strings de forma mais eficiente.", 
                "O operador spread expande um iterável (como um array) em elementos individuais em um contexto onde múltiplos elementos são esperados.", 
                " O operador spread serve apenas para criar cópias superficiais de objetos.",
                ],
        resposta: 14
    },
    {
        pergunta: "Qual das alternativas abaixo descreve a maneira correta de criar um módulo em JavaScript?",
        opcoes: ["Definir um objeto global e adicionar as funções e variáveis desejadas a ele.",
                "Utilizar a palavra-chave module para declarar um novo módulo e exportar as funcionalidades necessárias.", 
                "Envolver o código do módulo em uma função e retornar um objeto com as exportações.", 
                " Todas as alternativas estão corretas.",
                ],
        resposta: 15
    },
    // Adicione mais perguntas aqui, totalizando 20.
];

let indicePergunta = 0;
let tempo = 120 * 60; // 2 horas em segundos
let timerInterval;

function iniciarTeste() {
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
        button.addEventListener('click', () => escolherResposta(index));
        opcoesContainer.appendChild(button);
    });

    document.getElementById('proximaPergunta').style.display = 'none'; // Esconde o botão de próxima pergunta
}

function escolherResposta(indice) {
    const perguntaAtual = perguntas[indicePergunta];
    if (indice === perguntaAtual.resposta) {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta!');
    }

    indicePergunta++;
    if (indicePergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        alert('Teste finalizado! Você completou todas as perguntas.');
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
    // Aqui você pode adicionar lógica para mostrar resultados ou salvar respostas
    alert('Teste encerrado.');
}

// Inicia o teste ao carregar a página
window.onload = iniciarTeste;
