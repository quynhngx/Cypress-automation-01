//cypress - Spec
//need to one testing framework to write your test in JavaScript. In this case, it is Mocha.

/// <reference types="Cypress" />

//describe part "My First Test" is a test suite.
describe('My First Test Suite', function () {
    it('My First Test Case', function () {
        //test step will go inside {}

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') //navigate to a url
        cy.get('.search-keyword').type('ca') //get the locator presenting on a page and type "ca" into that locator
        cy.wait(2000) //to tell Cypress to wait because the test app has no clue of loading animation.

        //assertion describes the desired state of your elements, your objects, and your application.
        cy.get('.product:visible').should('have.length', 4) //get all the products that have classname '.product' and check whether or not it presents 4 items

        //Assign classname with a variable using alias. Below, .products is assigned to a variable called 'productLocator' and replace all the '.products' by '@productLocator'
        cy.get('.products').as('productLocator')

        //Find a child within a parent
        cy.get('@productLocator').find('.product').should('have.length', 4)

        //Click on a specific item in parent area using array index
        cy.get('@productLocator')
            .find('.product')
            .eq(1)
            .contains('ADD TO CART')
            .click()

        cy.get('@productLocator')
            .find('.product')
            .each(($e1, index, $list) => {
                const textVeg = $e1.find('h4.product-name').text()
                if (textVeg.includes('Cashews')) {
                    cy.wrap($e1).contains('ADD TO CART').click() //using click method on the find method is now not allowed. So use the method cy.wrap. Second way, cy.wrap($e1).find('button').click()
                }
            })

        //Cypress is asynchronous in nature.

        //Assert if logo text is correctly displayed.
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in logs.
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })
    })
})
