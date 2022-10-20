/// <reference types="cypress" />

let token;


describe('[US-0003] – API de cupons', () => {
    beforeEach(() => {
    })

    it('Deve listar todos os cupons cadastrado', () => {
        cy.request({
            method: 'GET',
            headers: {
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
            },
            url: '/coupons'
        }).then(res => {
            cy.log(res)
        })
    })

  })
  