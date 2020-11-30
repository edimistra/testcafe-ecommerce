# testcafe-ecommerce
Test automation framework for testing an e-commerce site

* Used the [Page Object Model](https://devexpress.github.io/testcafe/documentation/guides/concepts/page-model.html) based on TestCafe recommendation
* Generated test data with [faker.js](https://www.npmjs.com/package/faker)
 
## Test Automation folder structure and files:
* /tests contains all test files
* /pages contain all pages folder
* /testdata contains the test data used by all tests
* /screenshots Screenshots folder
* .testcaferc.json is the config file for TestCafe. Tests will run in Chrome headless by default. If you want to run the tests in other browsers check [Configuration File](https://devexpress.github.io/testcafe/documentation/reference/configuration-file.html#browsers)
 
# How to run the tests?
> nvm use 11.5.0
> npm install
> npm run test
