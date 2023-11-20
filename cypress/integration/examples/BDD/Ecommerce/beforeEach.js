
beforeEach(function ()
{
    cy.fixture('example').then(function(exampleData)
    {
        cy.data=exampleData
    })
});