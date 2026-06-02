describe('Teste do Painel: Painel Ficha Atendimento - Protocolo Sepse', () => {
  it('Deve preencher os filtros, buscar e exportar para excel', () => {
    const painelUrl = 'http://painelmvhomolog.phcnet.usp.br/PainelFichaAtendimentoProtocoloSepse';

    cy.loginSeguroPainel({ painelUrl });
    cy.automatizarPainelPadrao();
  });
});
