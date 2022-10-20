

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

    


}

const cartPage = new CartPage();
export default cartPage;


// cy.get(cartLocators.productCart).each((product, i) => {
//     if(i == index) {
//         product.trigger('mouseover')
//         cy.get('.add_to_cart_button').last().click({force: true})
//     }
// })