describe('Teste do Painel: Nutricao ICHC', () => {
  it('Deve preencher os filtros, buscar e exportar para excel', () => {
    const painelUrl = 'http://painelmvhomolog.phcnet.usp.br/NutricaoIchc';

    cy.loginSeguroPainel({ painelUrl });
    cy.automatizarPainelPadrao();
  });
});
