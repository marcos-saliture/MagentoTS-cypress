require('cypress-xpath');

describe('testing Login with success', () => {

    beforeEach('access the website magento', () => {

        cy.visit(Cypress.env('BASE_URL'))

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();


    })


    it('TC12: login with success', () =>{


        cy.get('#email').type(Cypress.env('TC12').email);

        cy.get('#pass').type(Cypress.env('TC12').password);

        cy.get('#send2').click();


        cy.get('span.logged-in').should('be.visible').then((el) => {
            
            const message = 'Welcome, ' + Cypress.env('TC12').fullname + '!'

            cy.get(el).should('contain.text', message)
        })
          

    })

})
