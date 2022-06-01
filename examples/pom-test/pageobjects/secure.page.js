const Page = require('./page');

class SecurePage extends Page {

    get accountLayout () {
        return $('id:account_layout');
    }
}

module.exports = new SecurePage();
