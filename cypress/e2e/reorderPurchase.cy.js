require('cypress-xpath');

describe('reorder a purchase ', () => {

    beforeEach('access magento page logged', () => {

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

        cy.get('#email').type(Cypress.env('TC27').email);
        cy.get('#pass').type(Cypress.env('TC27').password);

        cy.get('#send2').click();


        cy.get('button.action.switch').first().click()
        cy.get('a:contains(My Account)').first().click()
    
        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })


    it('TC27: reorder and do checkout', () => {

        cy.get('a:contains(My Orders)').should('be.visible').click().then( () => {
            cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','My Orders')

        })

        cy.get('a.action.order').first().click()

        cy.get('button[title="Proceed to Checkout"]').last().should('be.visible').click()

        cy.contains('div.step-title', 'Shipping Methods').scrollIntoView().should('be.visible')

        cy.get('input[name="ko_unique_1"]').should('be.visible').click()

        cy.get('button[data-role="opc-continue"]').click()
                
        cy.get('button[title="Place Order"]').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Thank you for your purchase!')

    })


})