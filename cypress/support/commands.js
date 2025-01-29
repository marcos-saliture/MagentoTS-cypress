require('cypress-xpath');

Cypress.Commands.add('fillWishList', () => {

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

})

Cypress.Commands.add('fillCompareList', () => {

    cy.get('#ui-id-8').click()

    const cssButtonAddToCompare ='#maincontent > div.columns > div > div.product-info-main > div.product-social-links > div > a.action.tocompare'


    cy.get('li.item > a:contains(Fitness Equipment)').scrollIntoView().should('be.visible').click().then( () => {

        cy.get('div[data-container="product-grid"] img[alt="Quest Lumaflex™ Band"]').scrollIntoView().should('be.visible').click().then( () => {

            cy.get(cssButtonAddToCompare).scrollIntoView().should('be.visible').click().then( () => {

                cy.get('#ui-id-6').trigger('mouseover').get('#ui-id-26').click()

                cy.get('div[data-container="product-grid"] img[alt="Pursuit Lumaflex™ Tone Band"]').scrollIntoView().should('be.visible').click().then( () => {
                
                    cy.get(cssButtonAddToCompare).scrollIntoView().should('be.visible').click().then( () => {

                        cy.get('#ui-id-6').trigger('mouseover').get('#ui-id-26').click()

    
                        cy.get('div[data-container="product-grid"] img[alt="Zing Jump Rope"]').scrollIntoView().should('be.visible').click().then( () => {

                            cy.get(cssButtonAddToCompare).scrollIntoView().should('be.visible').click()

                        })
                    })

                })                    

            })

        })

    })    

})

Cypress.Commands.add('fillCartWLP', () => {
    
    const xpathMenu = '/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'
    const xpathLinkMyWishList = '/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[2]/a'

    cy.xpath(xpathMenu).click()
    cy.xpath(xpathLinkMyWishList).click()


    cy.get('div[data-container="product-grid"] img[alt="Jade Yoga Jacket"]').should('be.visible').scrollIntoView().click()

    cy.get('#product-addtocart-button > span').should('be.visible').scrollIntoView()
    
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-53').click()
    cy.get('#product-addtocart-button > span').click()
                    
    cy.xpath(xpathMenu).click()
    cy.xpath(xpathLinkMyWishList).click()

    cy.get('div[data-container="product-grid"] img[alt="Balboa Persistence Tee"]').should('be.visible').click().then( () => {

        cy.get('#product-addtocart-button > span').should('be.visible').scrollIntoView()
            
        cy.get('#option-label-size-143-item-169').click()
        cy.get('#option-label-color-93-item-52').click()
        cy.get('#product-addtocart-button > span').click()
    
    })

    cy.get('a.action.showcart').should('be.visible').click()

    cy.get('#top-cart-btn-checkout').should('be.visible').click()

    cy.contains('div.step-title', 'Shipping Methods').scrollIntoView().should('be.visible')

    cy.get('input[name="ko_unique_1"]').should('be.visible').click()

    cy.get('button[data-role="opc-continue"]').click()
            
    cy.get('button[title="Place Order"]').click()

    cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Thank you for your purchase!')


})

Cypress.Commands.add('fillCartCLP', () => {

    const xpathMenu = '/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'
    const xpathLinkMyAccount = '/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[1]/a'

    cy.xpath(xpathMenu).scrollIntoView().should('be.visible').click()
    cy.xpath(xpathLinkMyAccount).click()
 
    cy.contains('span', 'Compare').should('be.visible').scrollIntoView().click()
   

    cy.get('img[alt="Quest Lumaflex™ Band"]').click()
    cy.get('#product-addtocart-button').click()

    cy.get('#ui-id-3').click()

    cy.get('#compare-clear-all').click()
    cy.get('button.action-primary.action-accept').click()

    cy.get('span.counter.qty > span.counter-number').should('be.visible').then( () => {

        cy.get('a.action.showcart').should('be.visible').click()

        cy.get('a.action.viewcart').click()

        cy.get('span[data-ui-id="page-title-wrapper"]').should('be.visible').should('contain.text', 'Shopping Cart')

    })
   
})

