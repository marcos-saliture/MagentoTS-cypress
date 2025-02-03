require('cypress-xpath');


describe('testing scenario of invalid email to forgot password', () => {


    beforeEach('going to "Forgot Your Password" page', () => {

        cy.visit(Cypress.env('BASE_URL'));

        cy.get('a:contains(Sign In)').first().click();

        cy.get('a.action.remind').click();


    })

    it('TC6: Passing an email with invalid pattern', () => {


        cy.get('#email_address').type(Cypress.env('TC6').invalidEmail)

        cy.get('button > span:contains(Reset My Password)').click();

        const message= 'Please enter a valid email address (Ex: johndoe@domain.com).'

        cy.get('#email_address-error').should('contain.text', message)

    })

})