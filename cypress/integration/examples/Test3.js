//cypress - Spec
//need to one testing framework to write your test in JavaScript. In this case, it is Mocha.

/// <reference types="Cypress" />

//describe part "My First Test" is a test suite.
describe('My Third Test Suite', function () {
    it('My Third Test Case', function () {
        //test step will go inside {}

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/') //navigate to a url

        //AUTOMATION TEST WITH CHECKBOXES

        //check a checkbox and assert the behavior using should('be.a') and compare the value using should('have.value','')
        cy.get('#checkBoxOption1')
            .check()
            .should('be.checked')
            .and('have.value', 'option1')

        //uncheck a checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //select multiple checkboxes. First thing is to find all the common property.
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //Static dropdown
        cy.get('select#dropdown-class-example')
            .select('option2')
            .should('have.value', 'option2')

        //Dynamic dropdown
        cy.get('input#autocomplete').type('sw')

        cy.get('li.ui-menu-item div').each(($e1, index, $list) => {
            if ($e1.text() === 'Sweden') {
                cy.wrap($e1).click()
            }
        })
        cy.get('input#autocomplete').should('have.value', 'Sweden')

        //work with invisible and visible elements
        cy.get('#displayed-text').should('be.visible') //verify if the box is visible or not
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons. NOTES: there's no uncheck for radio button.
        cy.get('input[type="radio"]').check('radio1').should('be.checked')
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio1"]').should('not.be.checked')
    })
})
