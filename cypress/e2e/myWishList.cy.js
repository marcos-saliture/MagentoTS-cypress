require('cypress-xpath');

describe('checking "My Wish List" ', () => {

    beforeEach('access "My Account" section', () => {

      
        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        const signInLink = 'body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a'

        cy.get(signInLink).click();

        cy.get('#email').type(Cypress.env('TC25').email);
        cy.get('#pass').type(Cypress.env('TC25').password);

        cy.get('#send2').click();


    })

    it('TC25: "My Wish List" page', () => {


        cy.get('#ui-id-3').click()

        const cssWJacket = '#maincontent > div.columns > div.sidebar.sidebar-main > div > div > ul:nth-child(2) > li:nth-child(2) > a' 
        const cssMTees = '#maincontent > div.columns > div.sidebar.sidebar-main > div > div > ul:nth-child(4) > li:nth-child(3) > a'
        const cssAddToWishlist = '#maincontent > div.columns > div > div.product-info-main > div.product-social-links > div > a.action.towishlist > span'
    
    
        cy.get(cssWJacket).click().then( () => {
        
            cy.get('div[data-container="product-grid"] img[alt="Jade Yoga Jacket"]').scrollIntoView().should('be.visible').click().then( () => {
    
                cy.get(cssAddToWishlist).scrollIntoView().should('be.visible').click()
                cy.contains('div', 'Jade Yoga Jacket has been added to your Wish List.').should('be.visible')
           
                cy.get('#ui-id-3').scrollIntoView().should('be.visible').click().then( () => {
        
                    cy.get(cssMTees).scrollIntoView().should('be.visible').click().then( () => {
        
                        cy.get('div[data-container="product-grid"] img[alt="Balboa Persistence Tee"]').scrollIntoView().should('be.visible').click().then(() => {
         
                            cy.get(cssAddToWishlist).scrollIntoView().should('be.visible').click().then( () => {
        
                                cy.contains('div', 'Balboa Persistence Tee has been added to your Wish List.').should('be.visible')
        
                            })    
                        })
                    })
                })
            }) 
        })

        cy.contains('a', 'Go to Wish List').scrollIntoView().should('be.visible').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text','My Wish List')

    })


})