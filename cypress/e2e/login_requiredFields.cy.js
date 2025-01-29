require('cypress-xpath');

describe('testing of required fields to Login', () => {

    beforeEach('access the website magento', () =>{
    
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();


        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Customer Login')

        cy.get('#block-customer-login-heading').should('contain.text', 'Registered Customer')

        cy.get('#block-new-customer-heading').should('contain.text', 'New Customers')


    })

    it('TC8: login with no values for username and password', () => {

        
        cy.get('#send2').click();


        cy.get('#email-error').should('contain.text', 'This is a required field.')
        cy.get('#pass-error').should('contain.text', 'This is a required field.')

    })

})

