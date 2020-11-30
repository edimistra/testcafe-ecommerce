import AccountPage from "../pages/account-page";
import testdata from "../testdata/test-data";

const accountPage = new AccountPage()

fixture `Create New Account`
    .page `http://automationpractice.com/index.php?controller=authentication&back=my-account`;

    test(`User creates a new account successfully`, async t => {     
        await accountPage.addNewAccount(testdata.createAccountData());
    });

    test(`User logs in  successfully`, async t => {     
        await accountPage.login(testdata.accountData);
    });