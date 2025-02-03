require('cypress-xpath');

describe('checking "My products review" section', () => {

    beforeEach('access "My Account" section', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

        cy.get('#email').type(Cypress.env('TC31').email);
        cy.get('#pass').type(Cypress.env('TC31').password);

        cy.get('#send2').click();


        cy.get('button.action.switch').first().click()
        cy.get('a:contains(My Account)').first().click()
    
        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })


    it('TC31: Product Reviews', () => {

        cy.get('a:contains(My Product Reviews)').should('be.visible').click().then( () => {
            cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','My Product Reviews')

        })

    })

})