// Função para mostrar/esconder a caixa de instruções
function toggleCaixa(botaoId, caixaId) {
    const botao = document.getElementById(botaoId);
    const caixa = document.getElementById(caixaId);

    botao.addEventListener('click', () => {
        caixa.classList.toggle('hidden');
    });

    // Fechar a caixa ao clicar fora
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

async function carregarProximaPagina(arquivo) {
    const resposta = await fetch(arquivo);
    const html = await resposta.text();
    document.getElementById('quest.html').innerHTML = html;
  }