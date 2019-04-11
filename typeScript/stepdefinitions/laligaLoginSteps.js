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
cucumber_1.defineSupportCode(function ({ When, Then }) {
    When(/^Im at LaLiga Login$/, () => __awaiter(this, void 0, void 0, function* () {
        yield blue_harvest_1.go("/login-front");
        yield blue_harvest_1.slow.see("Iniciar sesión");
    }));
    When(/^I login as UC$/, () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.$("input[name='username']").click();
        yield protractor_1.$("input[name='username']").clear();
        yield protractor_1.$("input[name='username']").sendKeys("testclub5");
        yield protractor_1.$("input[name='password']").click();
        yield protractor_1.$("input[name='password']").clear();
        yield protractor_1.$("input[name='password']").sendKeys("1234");
        yield blue_harvest_1.click("Entrar");
    }));
    When(/^I im loged as UC$/, () => __awaiter(this, void 0, void 0, function* () {
        yield blue_harvest_1.slow.see("Atlético de Madrid");
    }));
});
