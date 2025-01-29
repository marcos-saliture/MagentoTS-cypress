require('cypress-xpath');

describe('edit additional address function', () => {

    beforeEach('access "My Account" page', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC19').email);
        cy.get('#pass').type(Cypress.env('TC19').password);

        cy.get('#send2').click();


        const xpathMenu = '/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'
        const xpathLinkMyAccount = '/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[1]/a'
    

        cy.xpath(xpathMenu).click()
        cy.xpath(xpathLinkMyAccount).click()

        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })
      
        
    it(' TC19: edit additional address', () => {

        cy.get('a:contains(Address Book)').click() 
 

        cy.contains('strong', 'Additional Address Entries').scrollIntoView().should('be.visible')

        const cssLinkEdit = '#additional-addresses-table > tbody > tr:nth-child(1) > td.col.actions > a.action.edit > span' 
        cy.get(cssLinkEdit).click()

        cy.contains('span', 'Contact Information').scrollIntoView().should('be.visible')

        cy.get('#telephone').clear().type(Cypress.env('TC19').telephone)
        cy.get('#street_1').clear().type(Cypress.env('TC19').street1)
        cy.get('#city').clear().type(Cypress.env('TC19').city)
        cy.get('#region_id').select(Cypress.env('TC19').region_id)
        cy.get('#zip').clear().type(Cypress.env('TC19').zip)
        cy.get('#country').select(Cypress.env('TC19').country)

        cy.contains('strong', 'Address Book').scrollIntoView().should('be.visible')

        cy.get('button[title="Save Address"]').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','Address Book')


        cy.contains('span', 'Default Billing Address').should('be.visible')
        cy.contains('span', 'Default Shipping Address').should('be.visible')


        cy.get('a[aria-label="store logo"]').scrollIntoView().should('be.visible')

        cy.contains('div', 'You saved the address.').should('be.visible')

    })


})
