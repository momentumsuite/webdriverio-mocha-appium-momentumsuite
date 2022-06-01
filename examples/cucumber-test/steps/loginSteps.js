const {Given, When, Then} = require('@cucumber/cucumber');

const LoginScreen = require('../screens/login.screen');

Given(/^I launch the app$/, () => {
    return LoginScreen.launchApp();
});

Then(/^I expect that element (.*) is displayed$/, (checkElement) => {
    return LoginScreen.verifyElementWaitedForDisplayed(checkElement, 15000);
});

When(/^I set (.*) to the inputfield (.*)$/, (data,element) => {
    return LoginScreen.setElement(data,element);
});

When(/^I tap that element (.*)$/, (element) => {
    return LoginScreen.tapElement(element);
});

Then(/^I should see that element (.*) to be displayed$/, (checkElement) => {
    return LoginScreen.expectElementDisplayed(checkElement);
});