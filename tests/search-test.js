import BasePage from "../pages/base-page";
import testdata from "../testdata/test-data";

const basePage = new BasePage()

fixture `Search`
    .page `${testdata.serverURL}`;

    test(`Shopper performs a search with results`, async t => {     
        await basePage.searchKeyword(testdata.search.withResults);
    });

    test(`Shopper performs a search with no results`, async t => {     
        await basePage.searchKeyword(testdata.search.withNoResults, false);
    });