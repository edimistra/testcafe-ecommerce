import BasePage from "../pages/base-page";
import testdata from "../testdata/test-data";

const basePage = new BasePage()

fixture `Social_Media`
    .page `${testdata.serverURL}?id_product=${testdata.productId}&controller=product`
    .afterEach(async t => {
        await t.takeScreenshot()
    })

    test(`Shopper shares product to Google+`, async t => {     
        await basePage.shareProduct(testdata.productId, 'google-plus');
    });

    test(`Shopper shares product to Facebook`, async t => {     
        await basePage.shareProduct(testdata.productId, 'facebook');
    });

    test(`Shopper shares product to Twitter`, async t => {     
        await basePage.shareProduct(testdata.productId, 'twitter');
    });

    // Skipped Pinterest since we're unable to extract the URL due to a redirection