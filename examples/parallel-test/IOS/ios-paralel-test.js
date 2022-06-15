var assert = require('assert');

describe('Calculator', () => {
  
  it('Successfuly Calculator Paralel Test', async () => {

    PATH='/Users/mobven/Documents/GitHub/webdriverio-mocha-appium-momentumsuite/examples/parallel-test/IOS/IOS-PARALEL-TEST/'

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }


    var elOne = await $('(//*[contains(@label , "2") or contains(@name , "2")])[1]');
    await elOne.click();
    await browser.pause(500);
    browser.saveScreenshot(PATH+randomInt(1,9999999)+".png")

    var elTwo = await $('(//*[contains(@label , "+") or contains(@name , "+")])[1]');
    await elTwo.click();
    await browser.pause(500);
    browser.saveScreenshot(PATH+randomInt(1,9999999)+".png")

    var elThree = await $('(//*[contains(@label , "5") or contains(@name , "5")])[1]');
    await elThree.click();
    await browser.pause(500);
    browser.saveScreenshot(PATH+randomInt(1,9999999)+".png")

    var elFour = await $('(//*[contains(@label , "=") or contains(@name , "=")])[1]');
    await elFour.click();
    await browser.pause(500);
    browser.saveScreenshot(PATH+randomInt(1,9999999)+".png")
  });
});


