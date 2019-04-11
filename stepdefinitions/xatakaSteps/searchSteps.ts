import { XatakaPageObject } from '../../pages/examples/xatakaHome';
import { defineSupportCode } from 'cucumber';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ When, Then }) {
    let home: XatakaPageObject = new XatakaPageObject();

    When(/^I click on Xataka Search button$/, async () => {
        await home.openSearchButton.click();
    });

    Then(/^I type "(.*?)" at search input$/, async (text) => {
        await home.searchInput.sendKeys(<string>text);
    });

    Then(/^I confirm the search$/, async () => {
        await home.searchConfirmationButton.click();
    });

    Then(/^the search count has to appear$/, async () => {
        await expect(home.searchResultCountText.isDisplayed()).to.eventually.equal(true);
    });



})