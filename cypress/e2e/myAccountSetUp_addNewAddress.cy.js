require('cypress-xpath');

describe('checking "My account" functions', () => {

    beforeEach('access "My Account" section', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC18').email);
        cy.get('#pass').type(Cypress.env('TC18').password);

        cy.get('#send2').click();


        const xpathMenu = '/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'
        const xpathLinkMyAccount = '/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[1]/a'
    

        cy.xpath(xpathMenu).click()
        cy.xpath(xpathLinkMyAccount).click()

        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })
      
        
    it(' TC18: add new address', () => {

        cy.get('a:contains(Address Book)').click() 

        cy.contains('strong', 'Additional Address Entries').scrollIntoView().should('be.visible')
        cy.get('button[title="Add New Address"]').click()


        cy.get('#telephone').type(Cypress.env('TC18').telephone)
        cy.get('#street_1').type(Cypress.env('TC18').street1)
        cy.get('#city').type(Cypress.env('TC18').city)
        cy.get('#region_id').select(Cypress.env('TC18').region_id)
        cy.get('#zip').type(Cypress.env('TC18').zip)
        cy.get('#country').select(Cypress.env('TC18').country)

        cy.get('#primary_billing').check()
        cy.get('#primary_shipping').check()

        cy.contains('strong', 'Address Book').scrollIntoView().should('be.visible')

        cy.get('button[title="Save Address"]').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','Address Book')


        cy.contains('span', 'Default Billing Address').should('be.visible')
        cy.contains('span', 'Default Shipping Address').should('be.visible')


        cy.get('a[aria-label="store logo"]').scrollIntoView().should('be.visible')

        cy.contains('div', 'You saved the address.').should('be.visible')

    })


})
