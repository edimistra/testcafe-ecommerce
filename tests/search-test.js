import BasePage from "../pages/base-page";
import testdata from "../testdata/test-data";

const basePage = new BasePage()

fixture `Search`
    .page `${testdata.serverURL}`
    .afterEach(async t => {
        await t.takeScreenshot()
    })

    test(`Shopper performs a search with results`, async t => {     
        await basePage.searchKeyword(testdata.search.withResults)
        await basePage.assertSearchWithResults(testdata.search.withResults)
    });

    test(`Shopper performs a search with no results`, async t => {     
        await basePage.searchKeyword(testdata.search.withNoResults)
        await basePage.assertSearchWithNoResults(testdata.search.withNoResults)
    });