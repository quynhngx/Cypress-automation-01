/// <reference types="Cypress" />


describe('My First Test Suite', function () {
    it('My First Test Case', function () {

        //using Cypress intercept to mock https request to see if user can see the books list of another author

        cy.intercept('GET','https://rahulshettyacademy.com/angularAppdemo/GetBook.php?AuthorName=shetty',
        (req)=> 
        {
            req.url = 'https://rahulshettyacademy.com/angularAppdemo/GetBook.php?AuthorName=malhotra'
            req.reply((res)=>
            {
                expect(res.statusCode).to.equal(403)
            });
        }).as('dummyurl');
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.get('button.btn.btn-primary').click();
        cy.wait('@dummyurl');
        

    })

})


