const NavigatePage  = require('../pageobjects/login.page');
const LoginPage  = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith@email.ru', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Unable to log in with provided credentials.');
    });

  
    it('should login with invalid email credentials', async () => {
        // client.localStorage('DELETE');
        await LoginPage.open();

        await LoginPage.login('w.chess.test@yandex', 'worldchess', false);
        await expect(await LoginPage.btnSubmit).toBeDisabled();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('w.chess.test@yandex.ru', 'worldchess');
        await expect(await LoginPage.loginAvatar).toBeExisting();
        // var innerHTML = await LoginPage.loginAvatar.getHTML();
        // console.log(innerHTML);

    });

   
});


