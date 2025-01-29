require('cypress-xpath');

describe('testing buying watches', () => {

    beforeEach('access magento page logged', () => {
      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC28').email);
        cy.get('#pass').type(Cypress.env('TC28').password);

        cy.get('#send2').click();


    })


    it('TC28: buy 2 watches', () => {

        cy.get('#ui-id-6').trigger('mouseover').get('#ui-id-27').click()

        cy.get('a:contains(Didi Sport Watch)').should('be.visible').click();
        cy.get('#product-addtocart-button').should('be.visible').click()

        cy.get('#ui-id-6').should('be.visible').trigger('mouseover').get('#ui-id-27').click()
                
        cy.get('a:contains(Aim Analog Watch)').scrollIntoView().should('be.visible').click()
        cy.get('#product-addtocart-button').should('be.visible').click()

        cy.get('div.message-success.success.message').should('be.visible')

        cy.get('a.action.showcart').should('be.visible').click()

        cy.get('button[title="Proceed to Checkout"]').click()

        cy.contains('div.step-title', 'Shipping Methods').scrollIntoView().should('be.visible')
        
        cy.get('input[name="ko_unique_2"]').click()
                            
        cy.get('button[data-role="opc-continue"]').click()
                
        cy.get('button[title="Place Order"]').click()
                
        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Thank you for your purchase!')

    })

})


