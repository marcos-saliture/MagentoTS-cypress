require('cypress-xpath');

describe('testing Login with invalid email pattern', () => {

    beforeEach('access the website magento', () =>{
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

    })


    it('TC9: login with invalid email', () => {


        cy.get('#email').type(Cypress.env('TC9').invalidEmail);

        cy.get('#pass').type(Cypress.env('TC9').password);


        cy.get('#send2').click();

        const errorMessage = 'Please enter a valid email address (Ex: johndoe@domain.com).'
        cy.get('#email-error').should('contain.text', errorMessage)


    })


})

