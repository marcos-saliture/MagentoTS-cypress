require('cypress-xpath');

describe('testing Login with no registered account', () => {

    beforeEach('access the website magento', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

    })


    it('TC10: login with no registered account', () => {


        cy.get('#email').type(Cypress.env('TC10').email);

        cy.get('#pass').type(Cypress.env('TC10').password);

        cy.get('#send2').click();

        const errorMessage = 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'

        cy.contains('div', errorMessage).should('be.visible')

    })


})

