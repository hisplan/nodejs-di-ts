import {Grinder} from './grinder'

"use strict";

export class CoffeeMaker {

	grinder: Grinder;

	constructor(grinder) {
		this.grinder = grinder;
	}

	brew() {
		this.grinder.grind();
	}
}
