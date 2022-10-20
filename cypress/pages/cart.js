

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

    AddSomeItemsToCart(products) {
        cy.intercept('https://sndication.twitter.com/**', {})
        products.forEach(product => {
            cy.visit('/product/' + product)
            this.addProductToCart()          
        })
    }

    AddItemToCartManyTimes(product, times) {
        cy.intercept('https://sndication.twitter.com/**', {})
        cy.visit('/product/' + product)
        this.selectColor()
        this.selectSize()
        this.typeQuantity(times)
        this.addProductToCart()
    }

    checkIfCouponExists() {
        cy.get(cartLocators.cartDiscountSummary).should('exist')
    }

    shouldNotHaveAddedItemsToCart() {
        cy.get(cartLocators.goToCartButton).should('not.exist')
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


