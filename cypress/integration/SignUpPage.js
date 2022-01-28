/// <reference types="cypress" />

it('Testing', () => {

    cy.visit('https://dashboard.xendit.co/register/1')

})
it('fullname', () => {
    cy.get(':nth-child(2) > .input-text-content > input').type('Johnny Bravo')
})

it('bname', () => {

    cy.get(':nth-child(3) > .input-text-content > input').type('Photography Studio')
})

it('country', () =>{

    //cy.get('.selector-selected').select('Select Country').should('have.value','Philippines')
    //cy.get('.selector-options-section > :nth-child(2)').select('Select Country').should('have.value','Philippines')
    //cy.get('select').select('Philippines')
    //cy.get('.selector-selected').select('Philippines')
    //cy.get('.selector-selected').select('Philippines').should('have.value','Philippines').click()
    cy.get('.selector-selected').click()
    cy.wait(1000)
    cy.get('.selector-options-section > :nth-child(2)').click()
   
})

it('email', () => {

    cy.get(':nth-child(5) > .input-text-content > input').type('kclyncabelin@yahoo.com')
})

it('password', () => {

    cy.get(':nth-child(6) > .input-text-content > input').type('magandaako08')
})

it('checkbox', () =>{
    cy.get('#term-agreement').check()
})

it('freeAccount', () =>{
    cy.get('button[type="submit"]').click()
})

it('verifyEmail', () =>{

    cy.get('.btn').click
})