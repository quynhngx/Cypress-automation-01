/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage'
import ProductPage from '../PageObjects/ProductPage'

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
        const ProductPage01 = new ProductPage()

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

        ProductPage01.getCheckoutPage().click()
    })
})
