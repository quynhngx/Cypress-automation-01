//cypress - Spec
//need to one testing framework to write your test in JavaScript. In this case, it is Mocha.

/// <reference types="Cypress" />

//Handling Mouse hover
//Note: Cypress does not support to open Mouse Hover, but it has jQuery to support
describe('Handling Mouse Hover', () => {
    it('Handling Web tables with Cypress', () => {
        //test step will go inside {}
        cy.visit(Cypress.env('url')+'/AutomationPractice/') //navigate to a url

        // cy.get('.mouse-hover-content').invoke('show')
        cy.get('.mouse-hover-content a[href="#top"]').click({ force: true }) //try to click on hidden element without open the popup
        // cy.get('.mouse-hover-content a[href="#top"]').click()
        // cy.contains("Top").click()
        cy.url().should('include', 'top')
    })
})
