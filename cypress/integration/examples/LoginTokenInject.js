/// <reference types="Cypress" />


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

    })

})


