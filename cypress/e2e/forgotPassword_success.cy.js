require('cypress-xpath');


describe('testing success scenario of forgot password', () => {


    beforeEach('access "Forgot Your Password" page', () => {

        cy.visit(Cypress.env('BASE_URL'));

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('a.action.remind').click();


    })


    it('TC7: Passing a valid email', () => {

        const email = Cypress.env('TC7').email

        cy.get('#email_address').type(email)


        cy.get('button > span:contains(Reset My Password)').click();

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Customer Login')

        const message= 'If there is an account associated with ' + email + ' you will receive an email with a link to reset your password.'

        cy.contains('div', message).should('be.visible')

    })

})

