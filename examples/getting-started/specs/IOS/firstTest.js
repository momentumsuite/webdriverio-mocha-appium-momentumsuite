var assert = require('assert');

describe('Calculator', () => {
  
  it('Successfuly Calculator', async () => {
    PATH='/Users/mobven/Documents/GitHub/webdriverio-mocha-appium-momentumsuite/examples/getting-started/IOS/IOS-SINGLE-TEST/'

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }


    var elOne = await $('(//*[contains(@label , "2")])[1]');
    await elOne.click();
    await browser.pause(500);
    browser.saveScreenshot(PATH+randomInt(1,100000)+".png")

    var elTwo = await $("//XCUIElementTypeButton[@name='+']");
    await elTwo.click();
    await browser.pause(500);
    browser.saveScreenshot(PATH+randomInt(1,100000)+".png")
 
    var elThree = await $("//XCUIElementTypeButton[@name='5']");
    await elThree.click();
    await browser.pause(500);
    browser.saveScreenshot(PATH+randomInt(1,100000)+".png")

    var elFour = await $("//XCUIElementTypeButton[@name='=']");
    await elFour.click();
    await browser.pause(500);
    browser.saveScreenshot(PATH+randomInt(1,100000)+".png")
    
  });
});


