/// <reference types="cypress" />

describe('post user request', ()=>{
    let accessToken = 'VGVzdFNlY3JldFR5cGU='

    it('create user test', ()=>{

        cy.request({
            method : 'POST',
            url : 'https://api.xendit.co/callback_virtual_accounts',
            encoding: 'base64',

            headers : {
                'Authorization' : 'Bearer' + accessToken
             },

            Authorization : {
                'Authorization' : "VGVzdFNlY3JldFR5cGU="
            },

            
             body : {
                "external_id":"demo_14754597758172",
                "bank_code":"BNI",
                "name":"Rika Sutanto",

                "external_id": "va-1475804036622",
                "bank_code": "BNI",
                "name": "Michael Chen"
                },
                
                failOnStatusCode: false

        
        }).then((res)=>{
            expect(res.status).to.equal(401)
            expect(res.status).to.equal(200)
            expect(res.body).to.have.length(144)
            // expect(res.body).to.equal('external_id','demo_14754597758172')
            // expect(res.body).to.equal('bank_code','BNI')
            // expect(res.body).to.equal('name','Rika Sutanto')
            // expect(res.body).to.have.property('external_id','demo_14754597758172')
            // expect(res.body).to.have.property('bank_code','BNI')
            // expect(res.body).to.have.property('name','Rika Sutanto')
        })
    })
})