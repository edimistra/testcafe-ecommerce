import { Selector, ClientFunction, t } from "testcafe";

export default class CheckoutPage {
    constructor () {
        this.proceedToCheckout = Selector('a[title="Proceed to checkout"] span')
        this.continueToShipping = Selector('button[name="processAddress"]')
        this.termsCheckbox = Selector('input[type="checkbox"]')
        this.continueToPayment = Selector('button[name="processCarrier"]')
        this.payByWire = Selector('.bankwire')
        this.payByCheck = Selector('.cheque')
        this.confirmOrder = Selector('button[type="submit"] span').withText('I confirm my order')
        this.confirmWireMessage = Selector('p.cheque-indent strong.dark') //Your order on My Store is complete.
        this.wireInfo = Selector('div.box.cheque-box h3.page-subheading')
        this.chequeInfo = Selector('div.box.order-confirmation h3.page-subheading')
        this.confirmChequeMessage = Selector('p.alert.alert-success') //Your order on My Store is complete.

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