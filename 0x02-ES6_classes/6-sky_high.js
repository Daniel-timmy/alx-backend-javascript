import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
	constructor(sqft, floors) {
		super(sqft);
		this._floors = floors;
	}

	get floors() {
		return this._floors;
	}

	set floors(fl) {
		this._floors = fl;
	}

	evacuationWarningMessage() {
		 return `Evacuate slowly the ${this.floors} floors`;
	}
}