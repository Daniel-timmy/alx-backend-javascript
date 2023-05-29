export default class Currency {
	constructor(code, name) {
		this._code = code;
		this._name = name;
	}

	get code() {
		return this._code;
	}
	
	get name() {
		return this._name;
	}

	set name(n) {
		this._name = n;
	}

	set code(c) {
		this._code = c;
	}

	displayFullCurrency() {
		return `${this.name} (${this.code})`;
	}
}
