import cartLocators from "../locators/cart";

class CartPage {


    addProductToCart (index) {
        cy.get(cartLocators.productCart)[index].trigger('mouseover')
    }


}

const cartPage = new CartPage();
export default cartPage;