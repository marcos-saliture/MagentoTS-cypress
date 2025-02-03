require('cypress-xpath');

describe('testing fill "Cart" with Compare List product', () => {

    beforeEach('access magento page logged', () => {

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

        cy.get('#email').type(Cypress.env('TC26').email);
        cy.get('#pass').type(Cypress.env('TC26').password);

        cy.get('#send2').click();


    })


    it('TC26: filling the "Cart" ', () => {

        cy.fillCompareList()
        cy.fillCartCLP()

    })
})

