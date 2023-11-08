/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import HomePage from '../../../PageObjects/HomePage'
import ProductPage from '../../../PageObjects/ProductPage'
import CheckoutPage from '../../../PageObjects/CheckoutPage'

const homePage = new HomePage()
const productPage = new ProductPage()
const checkoutPage = new CheckoutPage()

beforeEach(() => {
    cy.fixture('example').then(function (exampleData) {
        cy.data = exampleData
    })
})

Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

When('I add items into Cart', () => {
    homePage.getShopTab().click()

    cy.data.ProductName.forEach((element) => {
        cy.selectProductToCart(element)
    })
})

When('Validate the total prices', () => {
    var sum = 0
    productPage.getCheckoutPage().click()
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
})

Then('Select the country, submit and verify Thankyou message', () => {
    checkoutPage.getCheckout().click()

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

When('I fill all the details into the form', () => {
    homePage.getEditBox().type(cy.data.name)
    homePage.getGender().select(cy.data.gender)
})

Then('Validate the form behaviour', () => {
    homePage.getTwoWayBidingData().should(($inputElement) => {
        const NameBiding = $inputElement.val()
        expect(NameBiding).to.equal(cy.data.name)
    })

    homePage.getEditBox().should(($inputName) => {
        const Name = $inputName.val()
        expect(Name.length).to.be.at.least(2)
    })

    homePage.getEntrepreneur().should('be.disabled')
})

Then('Click Shop page', () => {
    homePage.getShopTab().click()
})
