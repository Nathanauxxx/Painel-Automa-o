describe('Teste do Painel: Formulario de Atendimento - Protocolo SEPSE', () => {
  it('Deve preencher os filtros, buscar e exportar para excel', () => {
    const painelUrl = 'http://painelmvhomolog.phcnet.usp.br/FormularioAtendimentoProtocoloSepse';

    cy.loginSeguroPainel({ painelUrl });
    cy.automatizarPainelPadrao();
  });
});
