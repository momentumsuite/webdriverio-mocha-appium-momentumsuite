const Page = require('./screen');

class LoginScreen extends Page {

    async launchApp () {
    }

    async verifyElementWaitedForDisplayed (element, waitTime) {
        await $(element).waitForDisplayed({ timeout: waitTime });
    }
    
    async setElement (data, element) {
        await $(element).addValue(data);
    }

    async tapElement (element) {
        await $(element).click();
    }

    async expectElementDisplayed (element) {
        await browser.pause(3000);
        await expect($(element)).toBeDisplayed()
    }

}

module.exports = new LoginScreen();
