/// <reference types="cypress" />

const cartPage = require("../../pages/cart");

describe('[US-0001] – Adicionar item ao carrinho', () => {
    beforeEach(() => {
      cy.visit('/produtos')
    })
  
    it('deve adicionar 3 produtos com sucesso', () => {
        cartPage.clickInTheFirstProduct()
        cartPage.typeQuantity('3')
        cartPage.selectSize()
        cartPage.selectColor
    })

  })
  