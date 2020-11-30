import BasePage from "../pages/base-page";
import testdata from "../testdata/test-data";

const basePage = new BasePage()

fixture `Search`
    .page `http://automationpractice.com/index.php`;

    test(`Shopper performs a search with results`, async t => {     
        await basePage.searchKeyword(testdata.search.withResults);
    });

    test(`Shopper performs a search with no results`, async t => {     
        await basePage.searchKeyword(testdata.search.withNoResults, false);
    });