//cypress - Spec
//need to one testing framework to write your test in JavaScript. In this case, it is Mocha.

/// <reference types="Cypress" />

//describe part "My First Test" is a test suite.
describe('My Second Test Suite', function () {
    it('My Second Test Case', function () {
        //test step will go inside {}
        cy.visit(Cypress.env('url') + '/seleniumPractise/#/') //navigate to a url
        cy.get('.search-keyword').type('ca') //get the locator presenting on a page and type "ca" into that locator
        cy.wait(2000) //to tell Cypress to wait because the test app has no clue of loading animation.

        //Assign classname with a variable using alias. Below, .products is assigned to a variable called 'productLocator' and replace all the '.products' by '@productLocator'
        cy.get('.products').as('productLocator')
        cy.get('@productLocator')
            .find('.product')
            .each(($e1, index, $list) => {
                const textVeg = $e1.find('h4.product-name').text()
                if (textVeg.includes('Cashews')) {
                    cy.wrap($e1).contains('ADD TO CART').click() //using click method on the find method is now not allowed. So use the method cy.wrap. Second way, cy.wrap($e1).find('button').click()
                }
            })

        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})
