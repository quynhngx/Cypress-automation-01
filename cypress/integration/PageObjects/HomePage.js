class HomePage {
    getEditBox() {
        return cy.get('div > input[name="name"]')
    }

    getTwoWayBidingData() {
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getGender() {
        return cy.get('select')
    }

    getEntrepreneur() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.get('a[href="/angularpractice/shop"]')
    }
}

export default HomePage
