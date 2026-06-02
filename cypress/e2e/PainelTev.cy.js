describe('Teste do Painel: Painel TEV', () => {
  it('Deve preencher os filtros, buscar e exportar para excel', () => {
    const painelUrl = 'http://painelmvhomolog.phcnet.usp.br/PainelTev';

    cy.loginSeguroPainel({ painelUrl });
    cy.automatizarPainelPadrao();
  });
});
