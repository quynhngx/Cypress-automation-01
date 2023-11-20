// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectProductToCart', (ProductName) => {
    cy.get('h4.card-title').each(($e1, index, $list) => {
        const PhoneItem = $e1.text()
        if (PhoneItem.includes(ProductName)) {
            // cy.get('.card-footer').contains('Add').click()   is another way
            cy.get('.btn.btn-info').eq(index).click()
        }
    })
})

//Custom LoginAPI command to extract the response token using Cypress
Cypress.Commands.add('LoginAPI',() => {
cy.request({
    method: 'POST',
    url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
    body: {
      "userEmail": "quynh.nguyenxuan131@gmail.com",
      "userPassword": "Potato@0201"
    }
}).then(function (response) {
        // expect(response.status).to.eq(200);
        Cypress.env('token', response.body.token)
        cy.log(response.body)
    })
    
})


