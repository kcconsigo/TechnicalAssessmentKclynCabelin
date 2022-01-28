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






