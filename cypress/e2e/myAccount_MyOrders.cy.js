require('cypress-xpath');

describe('testing view "My orders"', () => {

    beforeEach('access "My Account" page', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC29').email);
        cy.get('#pass').type(Cypress.env('TC29').password);

        cy.get('#send2').click();


        const xpathMenu = '/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'
        const xpathLinkMyAccount = '/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[1]/a'
    
        cy.xpath(xpathMenu).click()
        cy.xpath(xpathLinkMyAccount).click()
    
        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })

    it('TC29: view My orders', () => {


        cy.get('a:contains(My Orders)').should('be.visible').click().then( () => {
            cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','My Orders')

        })

    })

})
