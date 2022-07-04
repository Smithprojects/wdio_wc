const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnSignIn () {
        return $('button=sign in');
    }

    get btnBecome () {
        return $('button=Become a member');
    }

    get inputUsername () {
        return $('[name="email"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get btnSubmit () {
        return $('button=Sign in');
    }

    get loginAvatar () {
        return $('.sc-hmjpVf.eifQJd');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password, btnclick = true) {
        await this.btnSignIn.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        btnclick ? await this.btnSubmit.click() : '';
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
        // return super.open('login');
    }
}

module.exports = new LoginPage();
