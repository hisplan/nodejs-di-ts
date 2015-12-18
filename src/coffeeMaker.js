"use strict";
var CoffeeMaker = (function () {
    function CoffeeMaker(grinder) {
        this.grinder = grinder;
    }
    CoffeeMaker.prototype.brew = function () {
        this.grinder.grind();
    };
    return CoffeeMaker;
})();
exports.CoffeeMaker = CoffeeMaker;
