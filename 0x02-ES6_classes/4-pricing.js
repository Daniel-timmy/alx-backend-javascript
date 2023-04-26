import Currency from './3-currency.js';

export default class Pricing {
	constructor(amount, currency) {
		this._amount = amount;
		this._currency = currency;
	}
	set amount(amt) {
		this._amount = amt;
	}
	
	set currency(crr) {
		this._currency = crr;
	}

	get amount() {
		return this._amount;
	}

	get currency() {
		return this._currency;
	}

	displayFullPrice() {
		return `${this.amount} ${this.currency._name} (${this.currency._code})`;
	}
	static convertPrice(amount, conversionRate) {
		return (amount * conversionRate);
	}
}
