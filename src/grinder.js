"use strict";
var Grinder = (function () {
    function Grinder() {
    }
    Grinder.prototype.grind = function () {
        console.log('grind');
    };
    return Grinder;
})();
exports.Grinder = Grinder;
