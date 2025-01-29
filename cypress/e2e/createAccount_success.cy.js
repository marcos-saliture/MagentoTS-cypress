require('cypress-xpath');

describe('testing success register of new account', () => {

    beforeEach('access the website magento', () =>{

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const cssLinkCreateAccount = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a' 
        cy.get(cssLinkCreateAccount).click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Create New Customer Account')


    })
    

    it('TC4: Sign up customer with success', () => {

        cy.get('#firstname').type(Cypress.env('TC4').firstName)
        cy.get('#lastname').type(Cypress.env('TC4').lastName)
        cy.get('#email_address').type(Cypress.env('TC4').email)
        cy.get('#password').type(Cypress.env('TC4').password)
        cy.get('#password-confirmation').type(Cypress.env('TC4').confirmPassword)


        cy.get('button[title="Create an Account"]').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('be.visible').and('contain.text', 'My Account')

        cy.contains('span', 'Contact Information').should('be.visible')

        cy.get('div.box-content > p').should('contain.text', Cypress.env('TC4').fullname)
        cy.get('div.box-content > p').should('contain.text', Cypress.env('TC4').email)


        cy.contains('div', 'Thank you for registering with Main Website Store.').should('be.visible')


    })

})