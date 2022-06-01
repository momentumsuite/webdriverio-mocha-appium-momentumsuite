const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('id:username_txt');
    }

    get inputPassword () {
        return $('id:password_txt');
    }

    get btnSubmit () {
        return $('id:login_btn');
    }

    async login (username, password) {
        await this.inputUsername.waitForDisplayed({ timeout: 15000 });
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(3000);
    }

}

module.exports = new LoginPage();
