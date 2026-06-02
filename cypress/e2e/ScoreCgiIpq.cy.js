describe('Teste do Painel: Score CGI - IPq', () => {
  it('Deve preencher os filtros, buscar e exportar para excel', () => {
    const painelUrl = 'http://painelmvhomolog.phcnet.usp.br/ScoreCgiIpq';

    cy.loginSeguroPainel({ painelUrl });
    cy.automatizarPainelPadrao();
  });
});
