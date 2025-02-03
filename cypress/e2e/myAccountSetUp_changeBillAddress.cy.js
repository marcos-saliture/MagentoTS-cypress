require('cypress-xpath');

describe('testing update of billing address', () => {

    beforeEach('access "My Account" page', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

        cy.get('#email').type(Cypress.env('TC21').email);
        cy.get('#pass').type(Cypress.env('TC21').password);

        cy.get('#send2').click();


        cy.get('button.action.switch').first().click()
        cy.get('a:contains(My Account)').first().click()

        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })
      
        
    it(' TC21: updating billing address', () => {
        

        cy.get('a:contains(Address Book)').click() 

        cy.get('a:contains(Change Billing Address)').click()

        cy.contains('span', 'Contact Information').scrollIntoView().should('be.visible')


        cy.get('#telephone').clear().type(Cypress.env('TC21').telephone)
        cy.get('#street_1').clear().type(Cypress.env('TC21').street1)
        cy.get('#city').clear().type(Cypress.env('TC21').city)
        cy.get('#region_id').select(Cypress.env('TC21').region_id)
        cy.get('#zip').clear().type(Cypress.env('TC21').zip)
        cy.get('#country').select(Cypress.env('TC21').country)

        cy.get('button[title="Save Address"]').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','Address Book')


        cy.contains('span', 'Default Billing Address').should('be.visible')
        cy.contains('span', 'Default Shipping Address').should('be.visible')


        cy.get('a[aria-label="store logo"]').scrollIntoView().should('be.visible')

        cy.contains('div', 'You saved the address.').should('be.visible')

    })

})

