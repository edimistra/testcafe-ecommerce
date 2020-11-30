const faker = require('faker/locale/en_US');

// Uses faker to generate test data
exports.createAccountData = function() {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email(firstName, lastName)  
    const password = faker.internet.password(5)
    const address = faker.address.streetAddress()
    const city = faker.address.city()
    const state = faker.address.state(false)
    const zip = faker.address.zipCodeByState(state).substr(0,5) // Faker call returns a full zipcode (14305-1734)
    const mobile = faker.phone.phoneNumber('##########')
    const myAccount = 'MY ACCOUNT'

    return { firstName, lastName, email, password, address, city, state, zip, mobile, myAccount }
};

exports.accountData = {
    email: 'TestAccount1@gmail.com',
    password: 'Test1234',
    firstName: 'Test',
    lastName: 'Terdtrt'
}

exports.category = {
    women: 'WOMEN',
    dresses: 'DRESSES',
    tShirts: 'T-SHIRTS'
}

exports.search = {
    withResults: 'summer',
    withNoResults: 'honda'
}






// exports.calculateTax =  function(province, amount) {
// 	let tax;

// 	switch(province) {
// 		case 'ON':
// 			tax = (amount * 0.13);
// 			break;
// 		case 'AB':
// 			tax = (amount * 0.05);
// 			break;
// 		case 'BC':
// 			tax = (amount * 0.12);
// 			break;
// 	}
// 	return tax.toFixed(2);
// };

// exports.dynamicEmail =  function(jurisdiction) {
// 	return `ownrautomation+${Date.now()}-${jurisdiction}@gmail.com`;
// };

// exports.loginCredentials =  {
// 	Email_QA_IC_ON: 'ownrautomation+qaicon@gmail.com',
// 	Email_QA_IC_AB: 'ownrautomation+qaicab@gmail.com',
// 	Email_QA_IC_BC: 'ownrautomation+qaicbc@gmail.com',
// 	Email_QA_SP_ON: 'ownrautomation+qaspon@gmail.com',
// 	Email_QA_SP_AB: 'ownrautomation+qaspab@gmail.com',
// 	Email_QA_SP_BC: 'ownrautomation+qaspbc@gmail.com',
// 	Email_QA_NUM_ON: 'ownrautomation+qanumon@gmail.com',
// 	Email_QA_Logo_Standalone: 'ownrautomation+qalogosa@gmail.com',
// 	Email_QA_Logo_Standalone_Expired: 'ownrautomation+qalogosaexpired@gmail.com',
// 	Email_QA_Logo_Addon: 'ownrautomation+qalogoaddon@gmail.com',
// 	Email_QA_Logo_Addon_Expired: 'ownrautomation+qalogoaddonexpired@gmail.com',
// 	Email_Stage_IC_ON: 'ownrautomation+stageicon@gmail.com',
// 	Email_Stage_IC_AB: 'ownrautomation+stageicab@gmail.com',
// 	Email_Stage_IC_BC: 'ownrautomation+stageicbc@gmail.com',
// 	Email_Stage_SP_ON: 'ownrautomation+stagespon@gmail.com',
// 	Email_Stage_SP_AB: 'ownrautomation+stagespab@gmail.com',
// 	Email_Stage_SP_BC: 'ownrautomation+stagespbc@gmail.com',
// 	Email_Stage_NUM_ON: 'ownrautomation+stage-numon@gmail.com',
// 	Email_Stage_Logo_Standalone: 'ownrautomation+stagelogosa@gmail.com',
// 	Email_Stage_Logo_Standalone_Expired: 'ownrautomation+stagelogosaexpired@gmail.com',
// 	Email_Stage_Logo_Addon: 'ownrautomation+stagelogoaddon@gmail.com',
// 	Email_Stage_Logo_Addon_Expired: 'ownrautomation+stagelogoaddonexpired@gmail.com',
// 	Password : "OWNRAutomation123!",

// 	// TODO this is temp. until we get a test account created in okta
// 	Email_QA_Admin: 'carmelo.volpe@rangle.io',
// 	Password_Admin: 'Testing1@'
// };



// exports.signup =  {
// 	Jurisdiction_Ontario : 'Ontario',
// 	Jurisdiction_Alberta : 'Alberta',
// 	Jurisdiction_British_Columbia : 'British Columbia',
// 	Password : 'OWNRAutomation123!',
// 	First_Name : 'OwnrFirstName',
// 	Last_Name : 'OwnrLastName',
// 	Middle_Name : 'OwnrMiddleName',
// 	Email : 'ownrautomation@gmail.com'
// };


// exports.businessOwnrAddressAB = {
// 	Address1: {
// 		Street_Number: '11354',
// 		Street_Name: 'Edmonton Trail NE',
// 		Unit: '9AE3',
// 		City: 'Calgary',
// 		Postal_Code: 'T2E8R4',
// 		Province: 'Alberta',
// 		Short_Province: 'AB',
// 		Po_Box: '123'
// 	},
// 	Address2: {
// 		City: 'Red Deer',
// 		Province: 'Alberta',
// 		Short_Province: 'AB'
// 	},
// 	Address3: {
// 		City: 'St. Albert',
// 		Province: 'Alberta',
// 		Short_Province: 'AB'
// 	}
// };


// exports.restrictedWordsIncorpCA = [
// 	'ASSOCIATION',
// 	'CO-OPERATIVE',
// 	'CO-OPÉRATIVE',
// 	'COOPERATIVE',
// 	'COOPÉRATIVE',
// 	'CO-OP',
// 	'COUNCIL'
// ]