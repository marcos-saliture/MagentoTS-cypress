require('cypress-xpath');

describe('reorder a purchase ', () => {

    beforeEach('access magento page logged', () => {

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC27').email);
        cy.get('#pass').type(Cypress.env('TC27').password);

        cy.get('#send2').click();


        const xpathMenu = '/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'
        const xpathLinkMyAccount = '/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[1]/a'
    
        cy.xpath(xpathMenu).click()
        cy.xpath(xpathLinkMyAccount).click()
    
        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })


    it('TC27: reorder and do checkout', () => {

        cy.get('a:contains(My Orders)').should('be.visible').click().then( () => {
            cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','My Orders')

        })

        const xpathOrder = '//*[@id="my-orders-table"]/tbody/tr[1]/td[6]/a[2]'

        cy.xpath(xpathOrder).click()

        const xpathButtonCheckout = '//*[@id="maincontent"]/div[3]/div/div[2]/div[1]/ul/li[1]/button'

        cy.xpath(xpathButtonCheckout).should('be.visible').click()

        cy.contains('div.step-title', 'Shipping Methods').scrollIntoView().should('be.visible')

        cy.get('input[name="ko_unique_1"]').should('be.visible').click()

        cy.get('button[data-role="opc-continue"]').click()
                
        cy.get('button[title="Place Order"]').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Thank you for your purchase!')

    })


})