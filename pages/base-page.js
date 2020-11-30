import { Selector, t } from "testcafe";

export default class BasePage {
    constructor () {
        this.breadcrumb = Selector('.breadcrum.clearfix')
        this.categoryName = Selector('span.cat-name')
        this.searchInput = Selector('#search_query_top')
        this.searchSubmit = Selector('button[name="submit_search"]')
        this.productListHeader = Selector('span.lighter')
        this.headingCounter = Selector('span.heading-counter')
        this.productCount = Selector('div.product-count')
        this.noResultsAlert = Selector('p.alert.alert-warning')
    }

    async navigateTo(category) {
        await t
            .click(Selector('a').withText(category))
            .takeScreenshot()

        this.assertNavigateTo(category)
    }

    async assertNavigateTo(category) {
        await t
            .expect(this.breadcrumb.withText(category).exists).ok()
            .expect(this.categoryName.withText(category).exists).ok()
    }

    async searchKeyword(keyword, withResults = true) {
        await t
            .typeText(this.searchInput, keyword)
            .click(this.searchSubmit)
            .takeScreenshot()

            if (withResults) {
                this.assertSearchWithResults(keyword)
            }
            else {
                this.assertSearchWithNoResults(keyword)
            }
    }

    async assertSearchWithResults(keyword) {
        await t
            .expect(this.productListHeader.withText(keyword).exists).ok()
            .expect(this.headingCounter.exists).ok()
            .expect(this.productCount.exists).ok()
    }

    async assertSearchWithNoResults(keyword) {
        await t.expect(this.noResultsAlert.withText(keyword).exists).ok()
    }
}