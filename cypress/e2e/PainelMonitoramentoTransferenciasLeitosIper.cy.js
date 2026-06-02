describe('Teste do Painel: Painel de Monitoramento de Transferencias de Leitos IPER', () => {
  it('Deve preencher os filtros, buscar e exportar para excel', () => {
    const painelUrl = 'http://painelmvhomolog.phcnet.usp.br/PainelMonitoramentoTransferenciasLeitosIper';

    cy.loginSeguroPainel({ painelUrl });
    cy.automatizarPainelPadrao();
  });
});
