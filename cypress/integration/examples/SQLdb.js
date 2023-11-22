/// <reference types="Cypress" />

describe('SQL database access', function () {
    it('Access data from server into Cypress', function () {
    
        cy.sqlServer('select * from Persons').then(function(result)
        {
            console.log(result[0][1])
        })
    })
})