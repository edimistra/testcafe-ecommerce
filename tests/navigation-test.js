import BasePage from "../pages/base-page";
import testdata from "../testdata/test-data";

const basePage = new BasePage()

fixture `Category Navigation`
    .page `http://automationpractice.com/index.php`;

    test(`Shopper navigates to Women section`, async t => {     
        await basePage.navigateTo(testdata.category.women);
    });

    test(`Shopper navigates to Dresses section`, async t => {     
        await basePage.navigateTo(testdata.category.dresses);
    });

    test(`Shopper navigates to T-Shirts section`, async t => {     
        await basePage.navigateTo(testdata.category.tShirts);
    });