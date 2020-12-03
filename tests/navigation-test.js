import BasePage from "../pages/base-page";
import testdata from "../testdata/test-data";

const basePage = new BasePage()

fixture `Navigation`
    .page `${testdata.serverURL}`
    .afterEach(async t => {
        await t.takeScreenshot()
    })

    test(`Shopper navigates to Women section`, async t => {     
        await basePage.goToCategory(testdata.category.women)
        await basePage.assertGoToCategory(testdata.category.women)
    });

    test(`Shopper navigates to Dresses section`, async t => {     
        await basePage.goToCategory(testdata.category.dresses)
        await basePage.assertGoToCategory(testdata.category.dresses)
    });

    test(`Shopper navigates to T-Shirts section`, async t => {     
        await basePage.goToCategory(testdata.category.tShirts)
        await basePage.assertGoToCategory(testdata.category.tShirts)
    });