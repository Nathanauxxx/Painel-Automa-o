describe('Teste do Painel: Consulta Bloqueio/Desbloqueio Agendas', () => {
  it('Deve preencher os filtros, buscar e exportar para excel', () => {
    const painelUrl = 'http://painelmvhomolog.phcnet.usp.br/ConsultaBloqueioDesbloqueioAgendas';

    cy.loginSeguroPainel({ painelUrl });
    cy.automatizarPainelPadrao();
  });
});
