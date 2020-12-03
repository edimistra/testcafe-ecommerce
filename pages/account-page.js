import { Selector, t } from "testcafe";

export default class AccountPage {
    constructor () {
        this.emailCreate = Selector('#email_create')
        this.email = Selector('#email')
        this.submitCreate = Selector('#SubmitCreate')
        this.submitLogin = Selector('#SubmitLogin')
        this.firstName = Selector('#customer_firstname')
        this.lastName = Selector('#customer_lastname')
        this.password = Selector('#passwd')
        this.address = Selector('#address1')
        this.city = Selector('#city')
        this.stateSelect = Selector('#id_state')
        this.stateOption = this.stateSelect.find('option')
        this.zip = Selector('#postcode')
        this.mobile = Selector('#phone_mobile')
        this.register = Selector('#submitAccount')
        this.myAccount = Selector('a.account')
    }

    async addNewAccount(accountData) {
        await t
            .typeText(this.emailCreate, accountData.email)
            .click(this.submitCreate)
            .typeText(this.firstName, accountData.firstName)
            .typeText(this.lastName, accountData.lastName)
            .typeText(this.password, accountData.password)
            .typeText(this.address, accountData.address)
            .typeText(this.city, accountData.city)
            .click(this.stateSelect)
            .click(this.stateOption.withText(accountData.state))
            .typeText(this.zip, accountData.zip)
            .typeText(this.mobile, accountData.mobile)
            .click(this.register)
    }

    async assertAccount(accountData) {
        await t
            .expect(this.myAccount.withText(`${accountData.firstName} ${accountData.lastName}`).exists).ok()
            .takeScreenshot()
    }

    async login(accountData) {
        await t
            .typeText(this.email, accountData.email)
            .typeText(this.password, accountData.password)
            .click(this.submitLogin)
    }
}