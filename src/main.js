"use strict";
var injector_1 = require('di/injector');
var grinder_1 = require('./grinder');
var coffeeMaker_1 = require('./coffeeMaker');
var injector = new injector_1.Injector();
var grinder = new grinder_1.Grinder();
var coffeeMaker = new coffeeMaker_1.CoffeeMaker(grinder);
coffeeMaker.brew();
