/// <reference types="cypress" />

describe('realizar login de usuário', () => {
    it('deve realizar o login de um usuário', () => {
        cy.intercept('*/login')
        cy.visit('http://167.250.26.147:8080/sigAutomacao/app.html#/folha/pessoa')
        cy.get('#usuario').type('automacao')
        cy.get('#iPassword').type('1010')
        cy.wait(5000)
        cy.get('input.ng-scope').click()
        cy.wait(5000)
        cy.get('[nat="cadastroPessoaFolhaCodigoProximo"] > .fa').click()
        cy.get(':nth-child(5) > pd-autocomplete.ng-pristine > .pd-autocomplete > .form-group > .input-group > .input-group-btn > .btn > .fa').click()
        cy.get('#\31 675967806711-0-uiGrid-007H-cell > .ui-grid-cell-contents > .btn')
        
        

    });

});