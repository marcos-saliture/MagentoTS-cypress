require('cypress-xpath');

describe('testing button "Create Account" in login page ', () => {

    beforeEach('access the website magento', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();


    })

    it('TC11: redirection to "Create Account" page ', () => {

        cy.get('.action.create.primary').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Create New Customer Account')

    })


})

