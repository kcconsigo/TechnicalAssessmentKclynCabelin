/// <reference types="cypress" />

it('login', () =>{
    cy.visit('https://dashboard.xendit.co/login')
})

it('email', () =>{
    cy.get('.mb-16 > .input-text-content > input').type('kclyncabelin@yahoo.com')
})

it('password', () => {

    cy.get(':nth-child(2) > .input-text-content > input').type('magandaako08')
})

it('btnlogin', () => {
    
    cy.get('.d-flex > .btn').click()
    cy.wait(10000)
    
})

it('settingsPage', () => {

    cy.location('pathname', {timeout: 20000}).should('contain','/home')


    cy.get('#lhs-settings').click()
    cy.location('pathname', {timeout: 20000}).should('contain','/settings')

    cy.get('[href="/settings/developers#api-keys"] > .color-primary').click({force: true})


    cy.location('pathname', {timeout: 20000}).should('contain','/settings/developers')

    cy.get(':nth-child(1) > :nth-child(4) > .d-flex > [src="/assets/images/icons/icon_edit_grey.svg"]').click({force: true})

    cy.get(':nth-child(3) > .justify-content-between > .d-flex > .button-selector-right',{timeout: 20000}).click()

    cy.get(':nth-child(4) > .justify-content-between > .d-flex > .button-selector-right',{timeout: 20000}).click()

    cy.get(':nth-child(5) > .justify-content-between > .d-flex > .button-selector-right',{timeout: 20000}).click()

    cy.get('.modal-footer > .btn-primary').click({ multiple: true })

    cy.get('.mt-3 > .input-text > .input-text-content > input').type('magandaako08')

    cy.get('.password-modal-footer > .btn-primary').click({timeout: 20000})

    cy.get('.confirmation-modal-button-container > .btn').click({timeout: 20000})

})
    

    

it('callBacks', () =>{

    cy.location('pathname', {timeout: 20000}).should('contain','/home')

    cy.get('#lhs-callbacks').click()

    cy.location('pathname', {timeout: 20000}).should('contain','/callbacks')

    cy.get(':nth-child(1) > .xendit-dropdown > .filter-item > .xendit-dropdown-display-text').click({timeout: 10000})

    cy.get(':nth-child(2) > :nth-child(1) > li > .checkbox-container').click({force:true})

    cy.get(':nth-child(6) > li > .checkbox-container').click({force:true})

    cy.get('.new-filter-check-all > .btn-primary').should('not.be.disabled').click()

    cy.get('.content').click()

    cy.get('#header-business-selector > .d-flex').click({timeout: 800})

    cy.get('.py-12 > .text-sm').should('not.be.disabled').click()

})

   

    






