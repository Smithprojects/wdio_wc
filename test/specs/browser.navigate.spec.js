const NavigatePage  = require('../pageobjects/navigate.page');


describe('Navigate link panel', () => {
    it('should links have the correct url', async () => {
        await NavigatePage.open();
        
        const link = await NavigatePage.getLink('News');
        await expect(link).toHaveHref(`${process.env.BASE_URL}/news`);
        // await expect(link).toHaveLinkContaining('news');
        // var innerHTML = await LoginPage.loginAvatar.getHTML();
        // console.log(innerHTML);

    });

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

    // it('should links have the correct name', async () => {
    //     await NavigatePage.open();
        
    //     const navMenuName = ['Новости', 'Арена', 'Смотреть', 'Учиться', 'Сообщество', 'Магазин']
    //     const navMenuHref = ['/news', '/', '/broadcasts', '/masterclass.worldchess.com', '/community', '/shop.worldchess.com']
        

    //     for(var i = 0; i < navMenuName.length-1; i++) {
    //         let link = await NavigatePage.getLink(navMenuName[i])
    //         link.click()
    //         await browser.pause(5000)
    //         var url = await browser.getUrl()
    //         // console.log('URLLLLLLLLLL', url)
    //         // url.then(function(result){
    //         //     console.log('URLLLLLLLLLL', result)
    //         // })
    //         // await expect(browser).toHaveUrlContaining('loadtest')
    //         await expect(url).toContain(navMenuHref[i])
    //         browser.switchWindow('https://game-loadtest.k8stage.worldchess.com/')
    //     }
    // });
});