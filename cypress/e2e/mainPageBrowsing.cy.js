require('cypress-xpath');

describe('Browsing the main page without been logged', () => {

    beforeEach('access the website magento', () =>{
        cy.visit(Cypress.env('BASE_URL'));

        cy.get('a[aria-label="store logo"]').should('be.visible')

    })

    it('TC14: click the Logo LUMA', () => {
        cy.get('a[aria-label="store logo"]').click()

        cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
    })

    it('TC15: Click the empty cart logo', () => {

        cy.get('a.action.showcart').click()

        const emptyCarMessage = 'You have no items in your shopping cart.'
        cy.get('strong.subtitle.empty').should('be.visible').and('contain.text', emptyCarMessage)
    })

    it('TC16: going to Sale section by link', () => {

        cy.get('#ui-id-8').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Sale')

        cy.get('div.breadcrumbs> ul.items').should('be.visible')

        cy.get('ul.items>li:contains(Sale)').should('be.visible')
        cy.contains('span', 'Women\'s Deals').should('be.visible')
        cy.contains('span', 'Mens\'s Deals').should('be.visible')
        cy.contains('span', 'Gear Deals').should('be.visible')


    })


    it('TC17: going to "What\'s New" section by link', () => {

        cy.get('#ui-id-3').click()

        cy.get('#page-title-heading > span').should('contain.text', 'What\'s New')

        cy.get('ul.items>li:contains(What\'s New)').should('be.visible')

        cy.contains('span', 'New in women\'s').should('be.visible')
        cy.contains('span', 'New in men\'s').should('be.visible')



    })
   

})