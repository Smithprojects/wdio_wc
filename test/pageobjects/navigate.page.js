const Page = require('./page');

class NavigatePage extends Page {
    /**
     * define selectors using getter methods
     */
    get navNews () {
        return $('button=sign in');
    }

    get navArena () {
        return $('[name="email"]');
    }

    get navWatch () {
        return $('[name="password"]');
    }

    get navLearn () {
        return $('button=Sign in');
    }

    get navCommunity () {
        return $('.sc-hmjpVf.eifQJd');
    }
    
    get navShop () {
        return $('.sc-hmjpVf.eifQJd');
    }
    
    get navUs () {
        return $('.sc-hmjpVf.eifQJd');
    }

    get navLinks () {
        return $('.sc-eJwWfJ.kalwux');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async getLink (linkname) {
        return await this.navLinks.$(`=${linkname}`);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
        // return super.open('login');
    }
}

module.exports = new NavigatePage();
