require('cypress-xpath');

describe('testing update "My account" info', () => {

    beforeEach('access "My Account" page', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC23').email);
        cy.get('#pass').type(Cypress.env('TC23').password);

        cy.get('#send2').click();


        const xpathMenu = '/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'
        const xpathLinkMyAccount = '/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[1]/a'
    
        cy.xpath(xpathMenu).click()
        cy.xpath(xpathLinkMyAccount).click()
    
        cy.url().should('contain', 'https://magento.softwaretestingboard.com/customer/account/')


    })
      
        
    it(' TC23: updating account information', () => {
        

        cy.get('a:contains(Account Information)').click() 


        cy.get('#firstname').clear().type(Cypress.env('TC23').firstName)
        cy.get('#lastname').clear().type(Cypress.env('TC23').lastName)

        cy.get('#change-email').check()
        cy.get('#change-password').check()

        cy.get('#email').clear().type(Cypress.env('TC23').newEmail)

        cy.get('#current-password').clear().type(Cypress.env('TC23').currentPassword)
        cy.get('#password').type(Cypress.env('TC23').newPassword)
        cy.get('#password-confirmation').type(Cypress.env('TC23').confirmPassword)


        cy.get('button[title="Save"]').click()


        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','Customer Login')


        cy.contains('div', 'You saved the account information.').should('be.visible', )

    })


})

