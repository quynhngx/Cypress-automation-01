//cypress - Spec
//need to one testing framework to write your test in JavaScript. In this case, it is Mocha.

/// <reference types="Cypress" />

//describe part "My First Test" is a test suite.
describe('My 4th Test Suite', function () {
    it('My 4th Test Case', function () {
        //test step will go inside {}

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') //navigate to a url

        //Handle alerts in app
        //Cypress automatically handles the alert/popup by automatically hitting "OK" button
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //Cypress has ability to fire browser event, window:alert is one of the browser events
        cy.on('window:alert', (str) => {
            //assertion from Mocha
            expect(str).to.equal(
                'Hello , share this practice page and share your knowledge',
            )
        })

        //Cypress fires a confirmation popup
        cy.on('window:confirm', (str) => {
            //assertion from Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})
