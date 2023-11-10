/// <reference types="Cypress" />

//using cypress intercept to mock https responses
describe('My First Test Suite', function () {
    it('My First Test Case', function () {
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
        cy.wait('@java-book')
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})
