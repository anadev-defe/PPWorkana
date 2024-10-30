document.getElementById('iniciarTeste').addEventListener('click', function() {
    window.location.href = 'quest.html'; // Redireciona para a página de perguntas
});

// Funções para mostrar/esconder as caixas de instruções
function toggleCaixa(botaoId, caixaId) {
    const botao = document.getElementById(botaoId);
    const caixa = document.getElementById(caixaId);

    botao.addEventListener('click', () => {
        caixa.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest(`#${caixaId}`) && !event.target.closest(`#${botaoId}`)) {
            caixa.classList.add('hidden');
        }
    });
}

// Chamar a função para cada par de botão e caixa
toggleCaixa('tempo', 'caixaTempo');
toggleCaixa('certificado', 'caixaCertificado');
toggleCaixa('bonus', 'caixaBonus');
toggleCaixa('outrosTestes', 'caixaOutrosTestes');
