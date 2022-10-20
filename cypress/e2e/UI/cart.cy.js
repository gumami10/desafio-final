/// <reference types="cypress" />

const cartPage = require("../../pages/cart");

describe('[US-0001] – Adicionar item ao carrinho', () => {

    it('deve adicionar 3 produtos com sucesso', () => {
      cartPage.AddSomeItemsToCart()
      cartPage.goToCart()
      cartPage.countItems(3)
    })

  })
  