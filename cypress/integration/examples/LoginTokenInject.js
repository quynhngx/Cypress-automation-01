/// <reference types="Cypress" />
let actualProduct

const neatCSV = require('neat-csv')
describe('JWT session', function () {
    it('Inject login token in the local storage', function () {
    
    //Inject login token in the local storage to bypass login when executing test
    cy.LoginAPI().then(function()
    {
        cy.visit('https://rahulshettyacademy.com/client',
        {
           onBeforeLoad : function(window)
           {
                window.localStorage.setItem('token', Cypress.env('token'))
           }
        })
    })
    
    cy.get('.card-body b').eq(1).then(function(element)
    {
       actualProduct = element.text()
    })
    //Place an order on https://rahulshettyacademy.com/client
    cy.get('.card-body button:nth-last-of-type(1)').eq(1).click();
    cy.get('[routerlink*="cart"]').click();
    cy.contains('Checkout').click();
    cy.get('[placeholder*="Country"]').type('sw');
    cy.get('.ta-item').each(($country, index, $list)=>
    {
        if($country.text() === " Sweden")
        cy.wrap($country).click()
    });
    cy.get('.action__submit').click();
    cy.wait(2000);
    cy.contains("CSV").click();

    //Transform CSV text into JavaScript objects
    //cy.readFile used to read the content of a file
    cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_quynh.nguyenxuan131 (4).csv").then(async (text) =>
    {
        const csv = await neatCSV(text)
        console.log(csv)
        const productNameCSV = csv[0]["Product Name"]
        console.log(productNameCSV)
        expect(actualProduct).to.equal(productNameCSV)
    })
    
    
    })

})


