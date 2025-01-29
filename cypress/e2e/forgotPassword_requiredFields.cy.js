require('cypress-xpath');


describe('testing required fields of form forgot password', () => {


    beforeEach('access "Forgot Your Password" page', () => {

        cy.visit(Cypress.env('BASE_URL'));

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('a.action.remind').click();


    })


    it('TC5: check message of required field', () => {

        cy.get('span[data-ui-id="page-title-wrapper"]').should('have.text', 'Forgot Your Password?')


        const message = 'Please enter your email address below to receive a password reset link.'

        cy.contains('div', message).should('be.visible')

      
        cy.get('button > span:contains(Reset My Password)').click();

        cy.get('#email_address-error').should('contain.text', 'This is a required field.')


    })

})

