import AccountPage from "../pages/account-page";
import testdata from "../testdata/test-data";

const accountPage = new AccountPage()

fixture `Account`
    .page `${testdata.serverURL}?controller=authentication&back=my-account`
    .afterEach(async t => {
        await t.takeScreenshot()
    })

    test(`User creates a new account successfully`, async t => {  
        const accountData = testdata.createAccountData()   

        await accountPage.addNewAccount(accountData)
        await accountPage.assertAccount(accountData)
    });

    test(`User logs in  successfully`, async t => {     
        await accountPage.login(testdata.accountData);
        await accountPage.assertAccount(testdata.accountData)
    });