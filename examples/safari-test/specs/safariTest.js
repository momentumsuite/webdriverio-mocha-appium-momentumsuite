var assert = require('assert');

describe('Login with bank account', () => {
  
  it('Successfuly Login', async () => {   
    await browser.url('https://en.wikipedia.org/');
    var elSearchButton = await browser.$("id:searchIcon");
    await elSearchButton.click();
    await browser.pause(2000);
    var elSearchText = await browser.$$('[name="search"]')[1];
    await elSearchText.setValue("momentum\n");
    await browser.pause(3000);
    var assertText = await browser.$("id:firstHeading");
    await expect(assertText).toHaveText('Momentum')
  });
});


