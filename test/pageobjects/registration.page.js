const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectFree () { return $('p=Free') }
    get selectPro () { return $('p=Pro-account') }
    get btnBecome () { return $('button=Become a member') }
    get btnGift () { return $('button=Gift membership') }
		get btnClose () { return $('button.sc-ilfuhL.flDMhd') }

    async chooseAccount (account='Free') {

			account=='Free' 
				? await this.selectFree.click() 
				: await this.selectFree.click()
			await this.btnBecome.click()
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('?popup=registration');
    }
}

class RegistrationFormPage extends RegistrationPage {
	/**
	 * define selectors using getter methods
	 */
	get firstname () { return $('[name="first_name"]') }
	get lastname () { return $('[name="last_name"]') }
	get email () { return $('[name="email"]') }
	get password () {	return $('[name="password"]')	}
	get passwordAgain () { return $('[name="password_repeat"]')	}
	get country () { return $('select=[name="country"]') }
	get btnConfirm () {	return $('button=Confirm') }
	get rulesStrongPassword () { return $('p.nF8pHswmCkHeGgC22htXXA==.TGr3tHx2np0fjOcoD7eK3g==') }


	async chooseAccount (account='Free') {

		account=='Free' 
			? await this.selectFree.click() 
			: await this.selectFree.click()
		await this.btnBecome.click()
	}

	async setRegisteredDetails (firstname, lastname,  email = 'wdio_test@mail.ru', password = 'dszgeuvn3', passwordagain = 'dszgeuvn3', country = 'Belarus' ) {
		await this.firstname.addValue(firstname ? firstname : email.split('@')[0])
		await this.lastname.addValue(lastname ? lastname : email.split('@')[0])
		await this.email.addValue(email)
		await this.password.addValue(password)
		await this.passwordAgain.addValue(passwordagain)
		await this.country.selectByVisibleText(country)
		await this.btnConfirm.click()
	}

	/**
	 * overwrite specific options to adapt it to page object
	 */
	open () {
			return super.open('?popup=registration');
			// return super.open('login');
	}
}

module.exports = new RegistrationPage();
