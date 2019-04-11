import { $, $$ } from 'protractor';
import { ElementFinder } from 'protractor'

export class XatakaPageObject {
    public openSearchButton: ElementFinder;
    public searchInput: ElementFinder;
    public searchConfirmationButton: ElementFinder;
    public searchResultCountText: ElementFinder;


    constructor() {
        this.openSearchButton = $$("a[href='#search']").get(0);
        this.searchInput = $("input[id='search-field-2']");
        this.searchConfirmationButton = $("button[data-field='#search-field-2']");
        this.searchResultCountText = $("h3[class='search-results-count']");
    }

    subWebHeaderButton(href: string) {
        return $$("a[href='" + href + "']").get(0);
    }
}