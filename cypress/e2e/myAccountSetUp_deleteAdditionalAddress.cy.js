require('cypress-xpath');

describe(' delete additional address functions', () => {

    beforeEach('access "My Account" page', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Sign In)').first().click();

        cy.get('#email').type(Cypress.env('TC20').email);
        cy.get('#pass').type(Cypress.env('TC20').password);

        cy.get('#send2').click();


        cy.get('button.action.switch').first().click()
        cy.get('a:contains(My Account)').first().click()

        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })

        
    it(' TC20: delete additional address', () => {
        

        cy.get('a:contains(Address Book)').click()  

        cy.contains('strong', 'Additional Address Entries').scrollIntoView().should('be.visible')

        cy.get('a.action.delete').first().click()


        cy.get('button.action-primary.action-accept').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','Address Book')

        cy.get('a[aria-label="store logo"]').scrollIntoView().should('be.visible')

        cy.contains('div', 'You deleted the address.').should('be.visible')

    })


})

