require('cypress-xpath');

describe('testing warning messages on create account form', () => {

    beforeEach('access the website magento', () =>{

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const cssLinkCreateAccount = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a' 
        cy.get(cssLinkCreateAccount).click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Create New Customer Account')


    })

    it('TC2: warning messages for fields filled not correctly', () => {


        cy.get('#firstname').type(Cypress.env('TC2').firstName)
        cy.get('#lastname').type(Cypress.env('TC2').lastName)
        cy.get('#email_address').type(Cypress.env('TC2').email)
        cy.get('#password').type(Cypress.env('TC2').password)
        cy.get('#password-confirmation').type(Cypress.env('TC2').confirmPassword)


        cy.get('button[title="Create an Account"]').click();


        cy.get('#email_address-error').should('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')


        const passwordWarning = 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.'

        cy.get('#password-error').should('contain.text', passwordWarning)
        
        cy.get('#password-confirmation-error').should('contain.text', 'Please enter the same value again.')

    })

})