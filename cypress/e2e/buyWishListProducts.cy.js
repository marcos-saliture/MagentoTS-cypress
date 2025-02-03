require('cypress-xpath');

describe('buying products from wih list', () => {

    beforeEach('access magento page logged', () => {

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

        cy.get('#email').type(Cypress.env('TC32').email);
        cy.get('#pass').type(Cypress.env('TC32').password);

        cy.get('#send2').click();


    })


    it('TC32: fill "Cart" and checkout', () => {

        cy.fillWishList()
        cy.fillCartWLP()

    })
})

