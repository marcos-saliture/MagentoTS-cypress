require('cypress-xpath');

describe('checking "Log out" function', () => {

    beforeEach('access magento page logged', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

        cy.get('#email').type(Cypress.env('TC13').email);
        cy.get('#pass').type(Cypress.env('TC13').password);

        cy.get('#send2').click();


    })

    it('TC13: logout', () => {

        cy.get('button.action.switch').first().click()
        cy.get('a:contains(Sign Out)').first().click()

        cy.intercept('GET', '*/customer/account/logoutSuccess/', (req) => {
            req.reply({ status:200})

            cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/logoutSuccess/')
            cy.get('span[data-ui-id="page-title-wrapper"]').should('have.text','You are signed out')

        }).as('logout')

        cy.get('span[data-ui-id="page-title-wrapper"]').should('have.text','Home Page')


    })
})    
