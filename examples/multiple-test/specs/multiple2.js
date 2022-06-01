var assert = require('assert');

describe('Login with bank account2', () => {
  
  it('Successfuly Login2', async () => {
    
    var elUsername = await $("id:username_txt");
    await elUsername.waitForDisplayed({ timeout: 15000 });
    await elUsername.setValue("user2@mobven.com");

    var elPassword = await $("id:password_txt");
    await elPassword.setValue("Pass321*");

    var elSubmit = await $("id:login_btn");
    await elSubmit.click();
    await browser.pause(3000);

    var elAccount = await $("id:account_layout");
    await expect(elAccount).toBeDisplayed()
  });
});


