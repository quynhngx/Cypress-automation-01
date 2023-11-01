class ProductPage {
    getProductName() {
        return cy.get('h4.card-title')
    }

    getButtonAddtoCart() {
        return cy.get('.btn.btn-info')
    }

    getCheckoutPage() {
        return cy.get('.nav-item.active')
    }
}

export default ProductPage
