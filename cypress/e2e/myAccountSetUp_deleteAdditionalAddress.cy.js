require('cypress-xpath');

describe(' delete additional address functions', () => {

    beforeEach('access "My Account" page', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC20').email);
        cy.get('#pass').type(Cypress.env('TC20').password);

        cy.get('#send2').click();


        const xpathMenu = '/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'
        const xpathLinkMyAccount = '/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[1]/a'
    

        cy.xpath(xpathMenu).click()
        cy.xpath(xpathLinkMyAccount).click()

        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })

        
    it(' TC20: delete additional address', () => {
        

        cy.get('a:contains(Address Book)').click()  

        cy.contains('strong', 'Additional Address Entries').scrollIntoView().should('be.visible')

        const deleteLink = '#additional-addresses-table > tbody > tr:nth-child(1) > td.col.actions > a.action.delete > span'
        cy.get(deleteLink).click()


        cy.get('button.action-primary.action-accept').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','Address Book')

        cy.get('a[aria-label="store logo"]').scrollIntoView().should('be.visible')

        cy.contains('div', 'You deleted the address.').should('be.visible')

    })


})

