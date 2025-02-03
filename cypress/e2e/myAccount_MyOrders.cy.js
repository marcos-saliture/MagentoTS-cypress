require('cypress-xpath');

describe('testing view "My orders"', () => {

    beforeEach('access "My Account" page', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

        cy.get('#email').type(Cypress.env('TC29').email);
        cy.get('#pass').type(Cypress.env('TC29').password);

        cy.get('#send2').click();


        cy.get('button.action.switch').first().click()
        cy.get('a:contains(My Account)').first().click()
    
        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })

    it('TC29: view My orders', () => {


        cy.get('a:contains(My Orders)').should('be.visible').click().then( () => {
            cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','My Orders')

        })

    })

})
