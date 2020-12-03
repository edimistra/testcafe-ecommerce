import CartPage from "../pages/cart-page";
import AccountPage from "../pages/account-page";
import testdata, { accountData } from "../testdata/test-data";
import CheckoutPage from "../pages/checkout-page";

const productSet = require('../testdata/product-data.json')
const product = productSet[0]
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()
const accountPage = new AccountPage()


fixture `Checkout`
    .page `${testdata.serverURL}?id_product=${product.productid}&controller=product`
    .afterEach(async t => {
        await t.takeScreenshot()
    })
    
    test(`Registered but Unauthenticated Shopper buys an item and pays with a bank wire`, async t => {   
        await cartPage.addToCart(product)
        await checkoutPage.proceedToCheckout()
        await accountPage.login(testdata.accountData)
        await checkoutPage.continueCheckout('BANK-WIRE')
    });

    test(`Registered but Unauthenticated Shopper buys an item and pays with a cheque`, async t => {   
        await cartPage.addToCart(product)
        await checkoutPage.proceedToCheckout()
        await accountPage.login(testdata.accountData)
        await checkoutPage.continueCheckout('CHECK')
    });

    test(`Authenticated Shopper buys an item and pays with a cheque`, async t => {  
        await t.navigateTo(`${testdata.serverURL}?controller=authentication&back=my-account`)
        accountPage.login(testdata.accountData)
        await t.navigateTo(`${testdata.serverURL}?id_product=${product.productid}&controller=product`)
        await cartPage.addToCart(product)
        await checkoutPage.proceedToCheckout()
        await checkoutPage.continueCheckout('CHECK')
    });

    test(`Non-Registered Shopper buys an item and pays with a cheque`, async t => {
        const accountData = testdata.createAccountData()

        await cartPage.addToCart(product)
        await checkoutPage.proceedToCheckout()
        await accountPage.addNewAccount(accountData)
        await checkoutPage.continueCheckout('CHECK')
    });

    test(`Billing address is different than shipping address`, async t => {
        const newAddress = testdata.createAddressData()

        await cartPage.addToCart(product)
        await checkoutPage.proceedToCheckout()
        await accountPage.login(testdata.accountData)
        await checkoutPage.addNewAddress(newAddress)
        await checkoutPage.continueCheckout('BANK-WIRE')
    });