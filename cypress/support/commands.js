require('cypress-xpath');

Cypress.Commands.add('fillWishList', () => {

    cy.get('#ui-id-3').click()

    cy.get('a:contains(Jackets)').eq(2).click().then( () => {
    
        cy.get('div[data-container="product-grid"] img[alt="Jade Yoga Jacket"]').scrollIntoView().should('be.visible').click().then( () => {

            cy.get('a.action.towishlist').first().scrollIntoView().should('be.visible').click()
            cy.contains('div', 'Jade Yoga Jacket has been added to your Wish List.').should('be.visible')
       
            cy.get('#ui-id-3').scrollIntoView().should('be.visible').click().then( () => {
    
                cy.get('a:contains(Tees)').eq(3).scrollIntoView().should('be.visible').click().then( () => {
    
                    cy.get('div[data-container="product-grid"] img[alt="Balboa Persistence Tee"]').scrollIntoView().should('be.visible').click().then(() => {
     
                        cy.get('a.action.towishlist').first().scrollIntoView().should('be.visible').click().then( () => {
    
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

    cy.get('a:contains(Fitness Equipment)').last().scrollIntoView().should('be.visible').click()

    cy.get('img.product-image-photo[alt="Quest Lumaflex™ Band"]').scrollIntoView().should('be.visible').click()

    cy.get('a.action.tocompare').first().scrollIntoView().should('be.visible').click()

    cy.get('#ui-id-6').trigger('mouseover').get('#ui-id-26').click()

    cy.get('img.product-image-photo[alt="Pursuit Lumaflex™ Tone Band"]').scrollIntoView().should('be.visible').click()
                
    cy.get('a.action.tocompare').first().scrollIntoView().should('be.visible').click()

    cy.get('#ui-id-6').trigger('mouseover').get('#ui-id-26').click()

    
    cy.get('img.product-image-photo[alt="Zing Jump Rope"]').scrollIntoView().should('be.visible').click()

    cy.get('a.action.tocompare').first().scrollIntoView().should('be.visible').click()

})

Cypress.Commands.add('fillCartWLP', () => {


    cy.get('button.action.switch').first().click()
    cy.get('a:contains(My Wish List)').first().click()


    cy.get('a.product-item-photo[title="Jade Yoga Jacket"]').first().should('be.visible').scrollIntoView().click()

    cy.get('#product-addtocart-button > span').should('be.visible').scrollIntoView()
    
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-53').click()
    cy.get('#product-addtocart-button > span').click()
                    
    cy.get('button.action.switch').first().click()
    cy.get('a:contains(My Wish List)').first().click()

    cy.get('a.product-item-photo[title="Balboa Persistence Tee"]').first().should('be.visible').click().then( () => {

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

    cy.get('button.action.switch').first().click()
    cy.get('a:contains(My Account)').first().click()
 
    cy.contains('span', 'Compare').should('be.visible').scrollIntoView().click()
   

    cy.get('img[alt="Quest Lumaflex™ Band"]').click()
    cy.get('#product-addtocart-button').click()

    cy.get('#ui-id-3').click()

    cy.get('#compare-clear-all').click()
    cy.get('button.action-primary.action-accept').should('be.visible').click()

    cy.get('span.counter.qty > span.counter-number').should('be.visible').then(() => {

        cy.get('div.minicart-wrapper').click()

        cy.get('a.action.showcart').should('be.visible').and('have.class', 'active').click()
    
        cy.get('#top-cart-btn-checkout').should('be.visible')
            
        cy.get('a.action.viewcart').should('be.visible').click()
            
        cy.get('span[data-ui-id="page-title-wrapper"]').should('be.visible').should('contain.text', 'Shopping Cart')


    })
   
})

