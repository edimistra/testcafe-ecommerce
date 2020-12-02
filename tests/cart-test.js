import CartPage from "../pages/cart-page";
import testdata from "../testdata/test-data";

const productSet = require('../testdata/product-data.json');
const cartPage = new CartPage()


fixture `Cart`
    .page `${testdata.serverURL}`;
    
    productSet.forEach(product => {
        test(`Shopper adds an item to the cart`, async t => { 
            await t.navigateTo(`${testdata.serverURL}?id_product=${product.productid}&controller=product`)   
            await cartPage.addToCart(product)
            await cartPage.goToCart()
            await cartPage.assertAddToCart(product)
        });
    });
