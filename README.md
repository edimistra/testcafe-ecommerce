# testcafe-ecommerce
Test automation framework for testing an e-commerce site

* Used the [Page Object Model](https://devexpress.github.io/testcafe/documentation/guides/concepts/page-model.html) based on TestCafe recommendation
* Generated test data with [faker.js](https://www.npmjs.com/package/faker)
 
## Test Automation folder structure and files:
* /tests contains all test files
* /pages contain all pages folder
* /testdata contains the test data used by all tests
* /results contains the /reports folder and the /screenshots folder
* .testcaferc.json is the config file for TestCafe. Tests will run in Chrome headless by default. If you want to run the tests in other browsers check [Configuration File](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#browsers)
 
# How to run the tests?
* nvm use 11.5.0
* npm install
* npm run test

# Test Coverage
16 tests were added for the following features:
* Account creation: 1 test 
    * User creates a new account successfully
* Log in: 1 test
    * User logs in  successfully
* Browsing the store’s main categories: 3 tests
    * Shopper navigates to Women section
    * Shopper navigates to Dresses section
    * Shopper navigates to T-Shirts section
* Searching for clothing items: 2 tests
    * Shopper performs a search with results
    * Shopper performs a search with no results
* Sharing an item via social media: 3 tests
    * Shopper shares product to Google+
    * Shopper shares product to Facebook
    * Shopper shares product to Twitter
* Shopping cart: 1 test
    * Shopper adds an item to the cart
* Checkout​: 5 tests
    * Registered but Unauthenticated Shopper buys an item and pays with a bank wire
    * Registered but Unauthenticated Shopper buys an item and pays with a cheque
    * Authenticated Shopper buys an item and pays with a cheque
    * Non-Registered Shopper buys an item and pays with a cheque
    * Billing address is different than shipping address


# What would you do differently if you had more time?
I would had added more tests for the cart and the wishlist.
* Cart: using previously saved carts, removing items from cart, having multiple products in the cart, validating the big total (including shipping + tax)
* Wishlist: adding to wishlist, removing from wishlist, initiating checkout from wishlist