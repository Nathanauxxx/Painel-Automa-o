describe('Teste do Painel: Gestao de Leitos', () => {
  it('Deve preencher os filtros, buscar e exportar para excel', () => {
    const painelUrl = 'http://painelmvhomolog.phcnet.usp.br/GestaoLeitos';

    cy.loginSeguroPainel({ painelUrl });
    cy.automatizarPainelPadrao();
  });
});
