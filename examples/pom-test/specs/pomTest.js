const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Login with bank account', () => {

    before(function(){
        console.log("BEFORE ALL TEST CASES")
    })
    after(function(){
        console.log("AFTER ALL TEST CASES")
    })
    beforeEach(function(){
        console.log("BEFORE EACH ALL TEST CASES")
    })
    afterEach(function(){
        console.log("AFTER EACH ALL TEST CASES")
    })

     it('should login with valid credentials', async () => {
        await LoginPage.login('pom@mobven.com', 'Test321*');
        await expect(SecurePage.accountLayout).toBeDisplayed();
    }); 

});


