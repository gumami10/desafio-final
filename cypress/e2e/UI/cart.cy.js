/// <reference types="cypress" />

const cartPage = require("../../pages/cart");

describe('[US-0001] – Adicionar item ao carrinho', () => {

    it('deve adicionar 3 produtos com sucesso', () => {
      cartPage.AddSomeItemsToCart(['macbook-air-m3', 'macbook-air-m1-4', 'teste_01'])
      cartPage.goToCart()
      cartPage.countItems(3)
    })

    it('Valores entre R$ 200 e R$ 600 , ganham cupom de 10%', () => {
      cartPage.AddItemToCartManyTimes('lando-gym-jacket', 5)
      cartPage.goToCart()
      cartPage.checkIfCouponExists()
    })

    it('Valores acima de R$ 600 ganham cupom de 15%', () => {
      cartPage.AddItemToCartManyTimes('lando-gym-jacket', 8)
      cartPage.goToCart()
      cartPage.checkIfCouponExists()
    })

    it('Os valores não podem ultrapassar a R$ 990,00', () => {
      cartPage.AddItemToCartManyTimes('lando-gym-jacket', 15)
      cartPage.shouldNotHaveAddedItemsToCart()
    })

    it.only('Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho', () => {
      cartPage.AddItemToCartManyTimes('lando-gym-jacket', 10)
      cartPage.AddSomeItemsToCart(['macbook-air-m3'])
      cartPage.shouldNotHaveAddedItemsToCart()
    })

  })
  