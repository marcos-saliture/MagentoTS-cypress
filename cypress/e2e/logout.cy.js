require('cypress-xpath');

describe('checking "Log out" function', () => {

    beforeEach('access magento page logged', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC13').email);
        cy.get('#pass').type(Cypress.env('TC13').password);

        cy.get('#send2').click();


    })

    it('TC13: logout', () => {

        const xpathMenu = '/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'
        const xpathLinkLogout = '/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[3]/a'


        cy.xpath(xpathMenu).click()

        cy.xpath(xpathLinkLogout).click()

        cy.intercept('GET', '*/customer/account/logoutSuccess/', (req) => {
            req.reply({ status:200})

            cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/logoutSuccess/')
            cy.get('span[data-ui-id="page-title-wrapper"]').should('have.text','You are signed out')

        }).as('logout')

        cy.get('span[data-ui-id="page-title-wrapper"]').should('have.text','Home Page')


    })
})    
