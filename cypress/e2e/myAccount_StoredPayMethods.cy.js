require('cypress-xpath');

describe('checking "My stored pay methods" section', () => {

    beforeEach('access "My Account" section', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

        cy.get('#email').type(Cypress.env('TC30').email);
        cy.get('#pass').type(Cypress.env('TC30').password);

        cy.get('#send2').click();


        cy.get('button.action.switch').first().click()
        cy.get('a:contains(My Account)').first().click()
    
        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })


    it('TC30: Stored Payment Methods', () => {

        cy.get('a:contains(Stored Payment Methods)').should('be.visible').click().then( () => {
            cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','Stored Payment Methods')

        })

    })

})