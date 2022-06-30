const NavigatePage  = require('../pageobjects/navigate.page');


describe('Navigate link panel', () => {
    // it('should links have the correct url', async () => {
    //     await NavigatePage.open();

    //     const link = await NavigatePage.getLink('News');
    //     await expect(link).toHaveHref('https://loadtest.k8stage.worldchess.com/news');
    //     // await expect(link).toHaveLinkContaining('news');
    //     // var innerHTML = await LoginPage.loginAvatar.getHTML();
    //     // console.log(innerHTML);

    // });

    // it('should links have the correct name', async () => {
    //     await NavigatePage.open();

    //     const link = await NavigatePage.getLink('News');
    //     await expect(link).toHaveLinkContaining('news');
    //     // var innerHTML = await LoginPage.loginAvatar.getHTML();
    //     // console.log(innerHTML);

    // });

    // it('should links have the correct name', async () => {
    //     await NavigatePage.open();
        
    //     const navMenuName = ['Новости', 'Арена', 'Смотреть', 'Учиться', 'Сообщество', 'Магазин']
    //     const navMenuHref = ['/news', '/', '/broadcasts', '/masterclass.worldchess.com', '/community', '/shop.worldchess.com']
        

    //     for(var i = 0; i < navMenuName.length-1; i++) 
    //     // var link = await NavigatePage.getLink(navMenuName[i]);
    //     await expect(NavigatePage.getLink(navMenuName[i])).toHaveLinkContaining(navMenuHref[i]);
        
       

    // });

    it('should links have the correct name', async () => {
        await NavigatePage.open();
        
        const navMenuName = ['Новости', 'Арена', 'Смотреть', 'Учиться', 'Сообщество', 'Магазин']
        const navMenuHref = ['/news', '/', '/broadcasts', '/masterclass.worldchess.com', '/community', '/shop.worldchess.com']
        

        for(var i = 0; i < navMenuName.length-1; i++) {
            var link = await NavigatePage.getLink(navMenuName[i])
            link.click()
            // let url = browser.getUrl()
            // console.log('URLLL', url)
            await expect(browser.getUrl()).toHaveTextContaining(navMenuHref[i])
            browser.back()
        }
        

        
       

    });



    
    
});