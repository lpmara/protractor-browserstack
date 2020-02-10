// import homepage from '../expect/homePage.js'; 

describe('BrowserStack Local Testing', function() {
    it('can check tunnel working', function() {
      browser.driver.get('http://bs-local.com:3001').then(function() {
        expect(browser.driver.getTitle()).toMatch('บริษัทรับทำการตลาดออนไลน์ E-Marketing ครบวงจร|ITOPPLUS');
      });
    });
  });