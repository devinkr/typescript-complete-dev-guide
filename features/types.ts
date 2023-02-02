const today = new Date();
today.getMonth(); //code knows today is type Date and can list methods

// person type has age: that is number
const person = {
	age: 20,
};


class Color {}

// code knows red is a Color but no autocomplete for any methods or properties cause none exit.
const red = new Color();
