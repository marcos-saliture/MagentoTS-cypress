require('cypress-xpath');

describe('testing of required fields in create account form', () => {

    beforeEach('access the website magento', () =>{

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Create an Account)').first().click();

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Create New Customer Account')


    })
    
    it('TC1: Check inputs that are required', () => {


        cy.get('button[title="Create an Account"]').click();


        cy.get('#firstname-error').should('contain.text', "This is a required field.")
        cy.get('#lastname-error').should('contain.text', "This is a required field.")
        cy.get('#email_address-error').should('contain.text', "This is a required field.")

        cy.get('#password-error').should('contain.text', "This is a required field.")
        
        cy.get('#password-confirmation-error').should('contain.text', "This is a required field.")

    })

})