/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage'
import ProductPage from '../PageObjects/ProductPage'
import CheckoutPage from '../PageObjects/CheckoutPage'

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
        Cypress.config('defaultCommandTimeout', 8000)
        const HomePage01 = new HomePage()
        const ProductPage01 = new ProductPage()
        const CheckoutPage01 = new CheckoutPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        HomePage01.getEditBox().type(this.data.name)
        HomePage01.getGender().select(this.data.gender)
        HomePage01.getTwoWayBidingData().should(($inputElement) => {
            const NameBiding = $inputElement.val()
            expect(NameBiding).to.equal(this.data.name)
        })

        HomePage01.getEditBox().should(($inputName) => {
            const Name = $inputName.val()
            expect(Name.length).to.be.at.least(2)
        })

        HomePage01.getEntrepreneur().should('be.disabled')
        HomePage01.getShopTab().click()

        this.data.ProductName.forEach((element) => {
            cy.selectProductToCart(element)
        })

        var sum = 0
        ProductPage01.getCheckoutPage().click()
        cy.get('tr td:nth-child(4) strong')
            .each((item) => {
                const itemAmount = item.text().split(' ')[1]
                sum = sum + parseInt(itemAmount)
            })
            .then(function () {
                cy.log(sum)
            })

        cy.get('h3 strong').then(function (total) {
            const totalAmount = total.text().split(' ')[1].trim()
            expect(parseInt(totalAmount)).to.equal(sum)
        })

        CheckoutPage01.getCheckout().click()

        cy.get('input#country').type('Sweden')
        Cypress.config('defaultCommandTimeout', 8000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('input[type="checkbox"]').check({ force: true })
        cy.get('input[type="submit"]').click()
        cy.get('div.alert').should(($confirmMessage) => {
            const message = $confirmMessage.text()
            expect(message).to.contains('Thank you!')
        })
    })
})
