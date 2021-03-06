const faker = require('faker/locale/en_US');

exports.serverURL = 'http://automationpractice.com/index.php'

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

exports.createAddressData = function() {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const address = faker.address.streetAddress()
    const city = faker.address.city()
    const state = faker.address.state(false)
    const zip = faker.address.zipCodeByState(state).substr(0,5) // Faker call returns a full zipcode (14305-1734)
    const mobile = faker.phone.phoneNumber('##########')
    const alias = `${firstName}-${lastName}`

    return { firstName, lastName, address, city, state, zip, mobile, alias }
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
    withResults: 'SUMMER',
    withNoResults: 'honda'
}

exports.productId = '4'