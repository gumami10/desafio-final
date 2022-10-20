

const cartLocators = require("../locators/cart");

class CartPage {

    
    addProductToCart () {
        cy.get(cartLocators.addToCart).first().click()
    }

    clickInTheFirstProduct() {
        cy.get(cartLocators.product).first().click()
    }

    typeQuantity(qtd) {
        cy.get(cartLocators.inputQuantityText).type(`{leftArrow}{del}${qtd}`)
    }

    selectSize() {
        cy.get(cartLocators.sizeButton).click()
    }

    selectColor() {
        cy.get(cartLocators.colorButton).click()
    }

    AddSomeItemsToCart(max) {
        cy.intercept('https://syndication.twitter.com/**', {})
        cy.visit('/product/macbook-air-m3/')
        this.addProductToCart()
        cy.visit('/product/macbook-air-m1-4/')
        this.addProductToCart()
        cy.visit('/product/teste_01/')
        this.addProductToCart() 
    }

    goToCart() {
        cy.get(cartLocators.goToCartButton).click()
    }

    closeSummary () {
        cy.get(cartLocators.closeSummaryButton).click()
    }

    countItems (qtd) {
        cy.get(cartLocators.productsTable).should('have.length', qtd)
    }

    


}

const cartPage = new CartPage();
export default cartPage;


