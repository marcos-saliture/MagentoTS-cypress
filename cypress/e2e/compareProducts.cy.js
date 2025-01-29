require('cypress-xpath');

describe('checking "Compare Products" page', () => {

    beforeEach('access "My Account" page', () => {

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC24').email);
        cy.get('#pass').type(Cypress.env('TC24').password);

        cy.get('#send2').click();

    })

    it('TC24: checking "Compare Products" page', () =>{

        cy.fillCompareList()

        cy.get('#ui-id-8').click()

        cy.contains('span', 'Compare').scrollIntoView().should('be.visible').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','Compare Products')

        cy.contains('span.attribute.label', 'Description').scrollIntoView().should('be.visible')
   
    })

})