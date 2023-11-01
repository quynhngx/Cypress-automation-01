//cypress - Spec
//need to one testing framework to write your test in JavaScript. In this case, it is Mocha.

/// <reference types="Cypress" />

//Handling Web tables
describe('Handling Web tables', () => {
    it('Handling Web tables with Cypress', () => {
        //test step will go inside {}
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') //navigate to a url
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes('Python')) {
                cy.get('tr td:nth-child()')
                    .eq(index)
                    .next()
                    .then(function (price) {
                        const priceCourse = price.text()
                        expect(priceCourse).to.equal('25')
                    })
            }
        })
    })
})
