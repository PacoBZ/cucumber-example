"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const blue_harvest_1 = require("blue-harvest");
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^Im at LaLiga Home$/, () => __awaiter(this, void 0, void 0, function* () {
        yield blue_harvest_1.slow.see("Test club user 5");
    }));
    When(/^I go to Detbs List$/, () => __awaiter(this, void 0, void 0, function* () {
        yield blue_harvest_1.click("Deuda");
        yield blue_harvest_1.click("Listado de deudas");
    }));
    When(/^I click on Create Debt$/, () => __awaiter(this, void 0, void 0, function* () {
        yield waitForHideElement();
        yield blue_harvest_1.click("Crear nueva");
        yield blue_harvest_1.under("Crear deuda real").click("Crear");
    }));
    When(/^I complete the Debt Form$/, () => __awaiter(this, void 0, void 0, function* () {
        yield waitForHideElement();
        yield blue_harvest_1.below("Importe").click(protractor_1.by.name("amount"));
        yield blue_harvest_1.type("10000");
        yield blue_harvest_1.below("Fecha inicio").click(protractor_1.by.name("startDate"));
        yield blue_harvest_1.type("01/08/2019");
        yield pressEnter();
        yield blue_harvest_1.below("Fecha de vencimiento").click(protractor_1.by.name("expirationDate"));
        yield blue_harvest_1.type("01/11/2019");
        yield pressEnter();
        yield blue_harvest_1.below("Tipo de acreedor").click(protractor_1.by.className("Select-placeholder"));
        yield blue_harvest_1.click("Entidades de Crédito");
        yield blue_harvest_1.below("Tipo de interés").click(protractor_1.by.name("interestType"));
        yield blue_harvest_1.type("21");
        yield blue_harvest_1.below("Periodicidad del interés").click(protractor_1.by.className("Select-placeholder"));
        yield blue_harvest_1.click("Mensual");
    }));
    When(/^I complete the Debt Form with a "(.*?)" of Import and "(.*?)" Financial Entity$/, (amount, entity) => __awaiter(this, void 0, void 0, function* () {
        yield waitForHideElement();
        yield blue_harvest_1.below("Importe").click(protractor_1.by.name("amount"));
        yield blue_harvest_1.type(amount);
        yield blue_harvest_1.below("Fecha inicio").click(protractor_1.by.name("startDate"));
        yield blue_harvest_1.type("01/08/2019");
        yield pressEnter();
        yield blue_harvest_1.below("Fecha de vencimiento").click(protractor_1.by.name("expirationDate"));
        yield blue_harvest_1.type("01/11/2019");
        yield pressEnter();
        yield blue_harvest_1.below("Tipo de acreedor").click(protractor_1.by.className("Select-placeholder"));
        yield blue_harvest_1.click(entity);
        yield blue_harvest_1.below("Tipo de interés").click(protractor_1.by.name("interestType"));
        yield blue_harvest_1.type("21");
        yield blue_harvest_1.below("Periodicidad del interés").click(protractor_1.by.className("Select-placeholder"));
        yield blue_harvest_1.click("Mensual");
    }));
    When(/^I complete the Debt Calendar$/, () => __awaiter(this, void 0, void 0, function* () {
        yield blue_harvest_1.click("Ver calendario");
        yield blue_harvest_1.slow.see("Nuevo Calendario");
        yield blue_harvest_1.below("Nuevo Calendario").click(protractor_1.by.id("formEntryPaymentDisposedAmount"));
        yield blue_harvest_1.type("10000");
        yield blue_harvest_1.below("Nuevo Calendario").click(protractor_1.by.id("formEntryPaymentFeeAmountToPay"));
        yield blue_harvest_1.type("10000");
        yield blue_harvest_1.below("Nuevo Calendario").click(protractor_1.by.name("date"));
        yield blue_harvest_1.type("01/10/2019");
        yield pressEnter();
        yield blue_harvest_1.below("Nuevo Calendario").click(protractor_1.by.id("formEntryPaymentInterestAmountToPay"));
        yield blue_harvest_1.type("123");
        yield blue_harvest_1.click("Añadir");
    }));
    When(/^I complete the Debt Calendar with "(.*?)" amount Payment$/, (payment) => __awaiter(this, void 0, void 0, function* () {
        yield blue_harvest_1.click("Ver calendario");
        yield blue_harvest_1.slow.see("Nuevo Calendario");
        yield blue_harvest_1.below("Nuevo Calendario").click(protractor_1.by.id("formEntryPaymentDisposedAmount"));
        yield blue_harvest_1.type(payment);
        yield blue_harvest_1.below("Nuevo Calendario").click(protractor_1.by.id("formEntryPaymentFeeAmountToPay"));
        yield blue_harvest_1.type(payment);
        yield blue_harvest_1.below("Nuevo Calendario").click(protractor_1.by.name("date"));
        yield blue_harvest_1.type("01/10/2019");
        yield pressEnter();
        yield blue_harvest_1.below("Nuevo Calendario").click(protractor_1.by.id("formEntryPaymentInterestAmountToPay"));
        yield blue_harvest_1.type("123");
        yield blue_harvest_1.click("Añadir");
    }));
    When(/^I click on Save button$/, () => __awaiter(this, void 0, void 0, function* () {
        yield blue_harvest_1.click("Crear y salir");
    }));
    Then(/^The Debt was created$/, () => __awaiter(this, void 0, void 0, function* () {
        yield blue_harvest_1.slow.see("La deuda está completa");
    }));
});
function pressEnter() {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser
            .actions()
            .sendKeys(protractor_1.Key.ENTER)
            .perform();
    });
}
function waitForHideElement() {
    return __awaiter(this, void 0, void 0, function* () {
        const loadingSpinner = protractor_1.$('div[class="app-loader__spinner"]');
        yield protractor_1.browser.wait(() => {
            return loadingSpinner.isDisplayed().then((result) => !result);
        }, 50 * 1000);
    });
}
