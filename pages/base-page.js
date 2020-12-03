import { Selector, ClientFunction, t } from "testcafe";

export default class BasePage {
    constructor () {
        this.categoriesBlock = Selector('#categories_block_left .title_block')
        this.categoryName = Selector('span.cat-name')
        this.searchInput = Selector('#search_query_top')
        this.searchSubmit = Selector('button[name="submit_search"]')
        this.productListHeader = Selector('span.lighter')
        this.headingCounter = Selector('span.heading-counter')
        this.productCount = Selector('div.product-count')
        this.noResultsAlert = Selector('p.alert.alert-warning')
    }

    async goToCategory(category) {
        await t
            .click(Selector('a').withText(category))
    }

    async assertGoToCategory(category) {
        await t.expect(this.categoryName.innerText).contains(category) 

        if (category !== 'T-SHIRTS') { // Search results for T-SHIRTS do not have the categories block on left side
            await t.expect(this.categoriesBlock.innerText).contains(category)
        }
        await t.takeScreenshot()
    }

    async assertGoToDressCategory(category) {
        await t
            .expect(this.breadcrumb.withText(category).exists).ok()
            .expect(this.categoryName.withText(category).exists).ok()
            .takeScreenshot()
    }

    async assertGoToTShirtsCategory(category) {
        await t
            .expect(this.breadcrumb.withText(category).exists).ok()
            .expect(this.categoryName.withText(category).exists).ok()
            .takeScreenshot()
    }

    async searchKeyword(keyword) {
        await t
            .typeText(this.searchInput, keyword)
            .click(this.searchSubmit)
    }

    async assertSearchWithResults(keyword) {
        await t
            .expect(this.productListHeader.innerText).contains(keyword)
            .expect(this.headingCounter.exists).ok()
            .expect(this.productCount.exists).ok()
            .takeScreenshot()
    }

    async assertSearchWithNoResults(keyword) {
        await t
            .expect(this.noResultsAlert.withText(keyword).exists).ok()
            .takeScreenshot()
    }

    async shareProduct(productID, socialMedia) {
        await t.click(Selector(`button.btn.btn-default.btn-${socialMedia}`))
        
        const getURL = ClientFunction(() => window.location.href);
        const url = await getURL();

        if ((socialMedia == 'facebook') || (socialMedia == 'google-plus')) {
            await t.expect(url).contains(`253D${productID}`) // Facebook and Google Plus encode the product URL
        }
        if (socialMedia == 'twitter') {
            await t.expect(url).contains(`id_product=${productID}`)
        }

        await t.takeScreenshot()
    }
}