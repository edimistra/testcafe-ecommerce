import { Selector, ClientFunction, t } from "testcafe";

export default class CartPage {
    constructor () {
        this.sizeSelect = Selector('#group_1')
        this.sizeOption = this.sizeSelect.find('option')
        this.quantityWanted = Selector('#quantity_wanted')
        this.addToCartButton = Selector('#add_to_cart button[name="Submit"]')
        this.cartLink = Selector('div.shopping_cart a')
        this.cartItemDescription = Selector('p.product-name').child()
        this.cartItemColorSize = Selector('td.cart_description small a')
        this.itemPrice = Selector('span.price')
        this.itemQuantity = Selector('.cart_quantity input[type="hidden"]')
        this.itemTotal = Selector('td.cart_total span.price')
        this.closeCartModal = Selector('span[title="Close window"]')
    }

    async addToCart(product) {

        await t
            .typeText(this.quantityWanted, product.quantity.toString(), { replace: true })
            .click(this.sizeSelect)
            .click(this.sizeOption.withText(product.size))
            .click(Selector(`a[name='${product.color}']`))
            .click(this.addToCartButton)
    }

    async goToCart() {
        await t
            .click(this.closeCartModal)
            .click(this.cartLink)
    }

    async assertAddToCart(product) {
        const total = product.quantity * product.price

        await t
            .expect(this.cartItemDescription.innerText).contains(product.name) // Asserts correct item name
            .expect(this.cartItemColorSize.innerText).contains(product.color)
            .expect(this.cartItemColorSize.innerText).contains(product.size)
            .expect(this.itemPrice.withText(`$${product.price.toString()}`).exists).ok() // Asserts correct item price
            .expect(this.itemQuantity.value).eql(product.quantity.toString()) // Asserts correct item quantity
            .expect(this.itemTotal.innerText).contains(total.toString()) // Asserts correct total (Price x Qty)
    }
}