/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage'

//describe part "My First Test" is a test suite.
describe('My First Test Suite', function () {
    before(function () {
        // runs once before all tests
        cy.fixture('example').then(
            function (
                data, //get access to the example.json file and resolve a promise by then method
            ) {
                this.data = data //this.data is a variable that can be accessed for the whole file. Data only can be accessed inside the "before" loop
            },
        )
    })

    it('My First Test Case', function () {
        const HomePage01 = new HomePage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('div > input[name="name"]').type(this.data.name)
        cy.get('select').select(this.data.gender)

        //validation 01: verify if the text is auto-populated in Two-way biding data after user enters name in Name field
        // the first way
        // cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)

        // the second way
        cy.get('input[name="name"]:nth-child(1)').should(($inputElement) => {
            const NameBiding = $inputElement.val()
            expect(NameBiding).to.equal(this.data.name)
        })

        //validation 02: verify if the name in Name text should be at least 2 characters in length
        //the 1st way
        // cy.get('div > input[name="name"]').should('have.attr','minlength','2')

        //the 2nd way
        cy.get('input[name="name"]:nth-child(1)').should(($inputName) => {
            const Name = $inputName.val()
            expect(Name.length).to.be.at.least(2)
        })

        //validation 03: verify if the option "Enterpreneur" is disabled or not
        cy.get('#inlineRadio3').should('be.disabled')

        //go to Shop page and add the cart the item named "iphone X"
        cy.get('a[href="/angularpractice/shop"]').click()

        //if you have to write the same lines of code again and again in a test case.
        //Better to create customized command in support/commands.js and call it as cy.customizedcommand()

        //PARAMETERIZE TEST WITH MULTIPLE DATA SETS

        //1st step: create an array ProductName in example.json.
        //2nd step: iterate every element in that array by this syntax this.data.ProductName.forEach((element))
        //3rd step: type customized command to add to cart each item from the array.
        this.data.ProductName.forEach((element) => {
            cy.selectProductToCart(element)
        })
    })
})
