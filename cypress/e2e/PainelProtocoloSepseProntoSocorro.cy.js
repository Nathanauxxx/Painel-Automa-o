describe('Teste do Painel: Painel Protocolo SEPSE - Pronto Socorro', () => {
  it('Deve preencher os filtros, buscar e exportar para excel', () => {
    const painelUrl = 'http://painelmvhomolog.phcnet.usp.br/PainelProtocoloSepseProntoSocorro';

    cy.loginSeguroPainel({ painelUrl });
    cy.automatizarPainelPadrao();
  });
});
