require('cypress-xpath');

describe('buying products from wih list', () => {

    beforeEach('access magento page logged', () => {

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC32').email);
        cy.get('#pass').type(Cypress.env('TC32').password);

        cy.get('#send2').click();


    })


    it('TC32: fill "Cart" and checkout', () => {

        cy.fillWishList()
        cy.fillCartWLP()

    })
})

