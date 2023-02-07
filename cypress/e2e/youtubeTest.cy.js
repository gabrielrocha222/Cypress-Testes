/// <reference types="cypress" />


describe('Youtube', () => {
    it('deve realizara busca a um video ', () => {
        cy.visit('https://www.youtube.com/?themeRefresh=1')
        cy.get('#search-form > #container').type('Never gonna give you up')
        cy.get('#search-icon-legacy > yt-icon.style-scope').click()
        cy.wait(5000)
        cy.get(':nth-child(3) > :nth-child(1) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > yt-image.style-scope > .yt-core-image--fill-parent-height').click()
    });
});