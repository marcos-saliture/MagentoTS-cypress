require('cypress-xpath');

describe('testing password strength', () => {

    beforeEach('access the website magento', () =>{

        cy.visit(Cypress.env('BASE_URL'))

        cy.get('a[aria-label="store logo"]').should('be.visible')

        cy.get('a:contains(Create an Account)').first().click();

        cy.get('span[data-ui-id="page-title-wrapper"]').should('contain.text', 'Create New Customer Account')


    })
    
    
    it('TC3: Checking the password strength', () => {


        const password = Cypress.env('TC3').password

        cy.get('#password-strength-meter-label').should('contain.text', "No Password")
     

        for(let i=0;i<password.length;i++){

            let word = password.substring(0,(i+1))

            cy.get('#password').clear().type(word)

            if(i<=6){
                cy.get('#password-strength-meter-label').should('contain.text', "Weak")
            }else if(i==7){
                cy.get('#password-strength-meter-label').should('contain.text', "Medium")
            }else if((i==8) || (i==9)){
                cy.get('#password-strength-meter-label').should('contain.text', "Strong")
            }else{
                cy.get('#password-strength-meter-label').should('contain.text', "Very Strong")
            }
        }

    })

})

