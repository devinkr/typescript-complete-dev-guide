// Array-like structure where each element represents some property of a single record.

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

// in a tuple the order has a very specific meaning
const pepsi = ['brown', true, 40];

// TO make it a TS tuple we add type annotation that enforces order
const pepsiTuple: [string, boolean, number] = ['brown', true, 40];

// could also create type alias
type Drink = [string, boolean, number]; // creating a new Type

const pepsiType: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Tuples not very clear and not super useful
const carSpecs: [number, number] = [400, 3354]; // What is going on? What are these numbers?

// With an object it is more clear what the values represent.
const carStats = {
	horsepower: 400,
	weight: 3354,
};

// Maybe in CSV file tuple would be useful for row.
