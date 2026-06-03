describe('Teste do Painel: Alta Retroativa', () => {

    beforeEach(() => {
        // 1. Faz login automático e aceita os termos antes de começar
        cy.loginSeguroPainel({
            painelUrl: 'http://painelmvhomolog.phcnet.usp.br/AltaRetroativa'
        });
    });

    it('Deve preencher as datas de Alta Retroativa e filtrar', () => {
        const dataDe = '01/01/2024';
        const dataAte = '15/05/2024';
        const dataFinAlta = '15/05/2024';

        cy.log('Iniciando preenchimento do formulário...');

        // 2. Preenchendo as Datas (usando os seletores que você enviou)
        cy.get('[name="dataDe"]').clear({ force: true }).type(dataDe, { force: true });
        cy.get('[name="dataAte"]').clear({ force: true }).type(dataAte, { force: true });

        // Campo opcional ou complementar que você passou
        if (Cypress.$('#dtFinAlta').length > 0) {
            cy.get('#dtFinAlta').clear({ force: true }).type(dataFinAlta, { force: true });
        }

        // 3. Clicar em Filtrar
        cy.get('[name="btnFiltro"]').first().click({ force: true });

        // 4. Validação básica
        cy.get('body').should('not.contain.text', 'Erro 500');
        cy.log('Filtro aplicado com sucesso!');

        // 5. Exportar para Excel com lógica de segurança robusta
        cy.log('Exportando para Excel...');
        cy.get('body', { timeout: 15000 }).then(($body) => {
            const excelButtons = [
                '#exportExcel',
                '#exportarExcel',
                '#btnExcel',
                '#btnExportar',
                '.dt-button > span'
            ];

            let excelSelector = null;
            for (const selector of excelButtons) {
                if ($body.find(selector).length > 0) {
                    excelSelector = selector;
                    break;
                }
            }

            if (excelSelector) {
                cy.get(excelSelector, { timeout: 15000 })
                    .first()
                    .scrollIntoView()
                    .click({ force: true });
                cy.wait(1500);
            }
        });
    });
});
