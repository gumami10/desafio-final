/// <reference types="cypress" />

let token;
const headers = {
    authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
}
const url = '/wp-json/wc/v3/coupons'


describe('[US-0003] – API de cupons', () => {
    beforeEach(() => {
    })

    it('Deve listar todos os cupons cadastrado', () => {
        cy.request({
            method: 'GET',
            headers,
            url
        }).then(res => {
            expect(res.status).to.be.eql(200)
            expect(res.body).length.to.be.above(0)
        })
    })

    it('Deve listar todos os cupons cadastrado', () => {
        const code = `coupon:${Date.now().toString()}`
        cy.request({
            method: 'POST',
            headers,
            url,
            body: {
                amount: '10.00',
                discount_type: 'fixed_product',
                description: 'description',
                code
            }
        }).then(res => {
            expect(res.status).to.be.eql(201)
            expect(res.body.code).to.be.eql(code)
        })
    })

  })
