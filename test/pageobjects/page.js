/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
require("dotenv").config({ path: __dirname +'/../enviroments/.env' });

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path = '') {
        return browser.url(`${process.env.GAME_URL}/${path}`)
    }
}
