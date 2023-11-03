//cypress - Spec
//need to one testing framework to write your test in JavaScript. In this case, it is Mocha.

/// <reference types="Cypress" />

//describe part "My First Test" is a test suite.
describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
        //test step will go inside {}
        cy.visit(Cypress.env('url')+'/AutomationPractice/') //navigate to a url

        //tell Cypress that we are intentionally changing the domain by cy.origin()
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent a[href="about.html"]').click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
        })
    })
})
