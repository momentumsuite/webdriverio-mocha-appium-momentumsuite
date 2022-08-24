
var assert = require('assert');

describe('Calculator', () => {
  
  it('Calculate twi numbers', async () => {
    var elOne = await $('(//*[contains(@label , "2")])[1]');
    await elOne.click();
    await browser.pause(500);

    var elTwo = await $("//XCUIElementTypeButton[@name='+']");
    await elTwo.click();
 
    var elThree = await $("//XCUIElementTypeButton[@name='5']");
    await elThree.click();

    var elFour = await $("//XCUIElementTypeButton[@name='=']");
    await elFour.click();
  });
});


