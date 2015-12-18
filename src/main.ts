"use strict";

import {Injector} from 'di/injector';
import {Grinder} from './grinder';
import {CoffeeMaker} from './coffeeMaker';

var injector = new Injector();

var grinder = new Grinder();

var coffeeMaker = new CoffeeMaker(grinder);

coffeeMaker.brew();