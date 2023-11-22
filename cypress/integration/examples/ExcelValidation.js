/// <reference types="Cypress" />

let actualProduct

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
    cy.contains("Excel").click(); //download Excel file of an order

    // Parse Excel file into JavaScript objects
    
    const filePath = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_quynh.nguyenxuan131.xlsx"
    cy.task('ExceltoJsonConverter',filePath).then(function(result)
    {
        cy.log(result)
        expect(actualProduct).to.equal(result.data[1].B)
    })
   

    //browser(JavaScript engine) - JavaScript code -> Client side environment (front end) 
    //--> Cypress execute on the codes on the browser
    //Node (Node Engine) - JavaScrit code -> Back End applications/environment (JavaScript Code executed on Node Engine)
    //=> Node is more powerful then Browser JavaScript Engine because it accesses files in JavaScript
    //Access file - fs, database
    //=> Cypress has a task feature which write all the files code or database code as a task
    //Task - files, database -> return in config.js file
    
    })

})


