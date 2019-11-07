describe('this test contains some default funtionality', function () {

const { expect } = require('chai');
const HomePage = require('../pages/homePage').HomePage;

    it('Open de page and navigate to subpage 1', function () {
        browser.url('')
        HomePage.openContactPage()
    });
    
});