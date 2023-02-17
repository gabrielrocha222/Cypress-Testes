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
        cy.get('#pdDivBody').scrollTo(0, 1000)
        cy.get('[name="483inputAcDescricao"]').click().type('Gabriel')
        cy.get('[class="btn btn-default form-control ui-select-toggle"]').clcik
        

    });

});