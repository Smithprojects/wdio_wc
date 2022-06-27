

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('.sc-gUQvok.cSLtGV');
    }
}

module.exports = new SecurePage();
