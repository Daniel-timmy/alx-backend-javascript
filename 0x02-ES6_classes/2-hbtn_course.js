export default class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name !== 'string') throw new TypeError('name must be a string');
    	if (!Number.isInteger(length)) throw new TypeError('length must be a number');
		if (!Array.isArray(students)) throw new TypeError('students type must be an Array');

    		this._name = name;
    		this._length = length;
    		this._students = students;
	}

	get name() {
		return this._name;
	}
	
	get length() {
		return this._length;
	}

	get students() {
		return this._students;
	}

	set name(n) {
		if (typeof n !== 'string') throw new TypeError('name must be a string');
		this._name = n;
	}

	set length(l) {
		if (!Number.isInteger(l)) throw new TypeError('length must be a number');
		this._length = l;
	}

	set students(std) {
		if (!Array.isArray(std)) throw new TypeError('students type must be an Array');
		this._students = std;
	}
}
