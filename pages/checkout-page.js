import { Selector, ClientFunction, t } from "testcafe";

export default class CheckoutPage {
    constructor () {
        this.proceedToCheckoutButton = Selector('a[title="Proceed to checkout"]').filterVisible()
        this.addNewAddressButton = Selector('a[title="Add"]')
        this.continueToShippingButton = Selector('button[name="processAddress"]')
        this.termsCheckbox = Selector('input[type="checkbox"]')
        this.billingAddressCheckbox = Selector('#addressesAreEquals')
        this.continueToPaymentButton = Selector('button[name="processCarrier"]')
        this.payByWireButton = Selector('.bankwire')
        this.payByCheckButton = Selector('.cheque')
        this.confirmOrderButton = Selector('button[type="submit"] span').withText('I confirm my order')
        this.confirmWireMessage = Selector('p.cheque-indent strong.dark') //Your order on My Store is complete.
        this.paymentInfo = Selector('div.box.cheque-box h3.page-subheading')
        this.confirmChequeMessage = Selector('p.alert.alert-success') //Your order on My Store is complete.
        // Add New Address selectors
        this.firstName = Selector('#firstname')
        this.lastName = Selector('#lastname')
        this.address = Selector('#address1')
        this.city = Selector('#city')
        this.stateSelect = Selector('#id_state')
        this.stateOption = this.stateSelect.find('option')
        this.zip = Selector('#postcode')
        this.mobile = Selector('#phone_mobile')
        this.addressAlias = Selector('#alias')
        this.saveButton = Selector('#submitAddress')

    }

    async proceedToCheckout() {

        await t
            .click(this.proceedToCheckoutButton)
            .click(this.proceedToCheckoutButton)
    }

    async addNewAddress(address) {
        await t
            .click(this.addNewAddressButton)
            .typeText(this.firstName, address.firstName, { replace: true })
            .typeText(this.lastName, address.lastName, { replace: true })
            .typeText(this.address, address.address)
            .typeText(this.city, address.city)
            .click(this.stateSelect)
            .click(this.stateOption.withText(address.state))
            .typeText(this.zip, address.zip)
            .typeText(this.mobile, address.mobile)
            .typeText(this.addressAlias, address.alias)
            .click(this.saveButton)
    }

    async continueCheckout(paymentType) {
        await t
            .click(this.continueToShippingButton)
            .click(this.termsCheckbox)
            .click(this.continueToPaymentButton)
        
        if (paymentType === 'BANK-WIRE') {
            await t
                .click(this.payByWireButton)
                .expect(this.paymentInfo.innerText).contains(`${paymentType} PAYMENT`)
                .click(this.confirmOrderButton)
                .expect(this.confirmWireMessage.innerText).contains('Your order on My Store is complete')
                .takeScreenshot()
        }
        else {
            await t
                .click(this.payByCheckButton)
                .expect(this.paymentInfo.innerText).contains(`${paymentType} PAYMENT`)
                .click(this.confirmOrderButton)
                .expect(this.confirmChequeMessage.innerText).contains('Your order on My Store is complete')
                .takeScreenshot()
        }            
    }
}