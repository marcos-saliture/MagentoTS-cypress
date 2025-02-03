require('cypress-xpath');

describe('testing button "Create Account" in login page ', () => {

    beforeEach('access the website magento', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();


    })

    it('TC11: redirection to "Create Account" page ', () => {

        cy.get('.action.create.primary').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Create New Customer Account')

    })


})

