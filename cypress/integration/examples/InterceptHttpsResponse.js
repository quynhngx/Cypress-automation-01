/// <reference types="Cypress" />


describe('My First Test Suite', function () {
    it('My First Test Case', function () {

        //using Cypress intercept to mock https responses
        cy.intercept(
            {
                method: 'GET',
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            },
            {
                statusCode: 200,
                body: [
                    {
                        book_name: 'RestAssured with Java',
                        isbn: 'RSU',
                        aisle: '2301',
                    },
                ],
            },
        ).as('java-book')
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.get('button.btn.btn-primary').click()

        //compare what API responses and what shows on frontend is the same
        //length of API array responses = rows of table
        //wait until the promise of intercept is resolved
        cy.wait('@java-book').then(({request,response})=>
        {
            cy.get('tbody tr').should('have.length',response.body.length)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

        


    })
})
