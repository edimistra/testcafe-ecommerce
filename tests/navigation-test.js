import BasePage from "../pages/base-page";
import testdata from "../testdata/test-data";

const basePage = new BasePage()

fixture `Category Navigation`
    .page `${testdata.serverURL}`;

    test(`Shopper navigates to Women section`, async t => {     
        await basePage.goToCategory(testdata.category.women);
    });

    test(`Shopper navigates to Dresses section`, async t => {     
        await basePage.goToCategory(testdata.category.dresses);
    });

    test(`Shopper navigates to T-Shirts section`, async t => {     
        await basePage.goToCategory(testdata.category.tShirts);
    });