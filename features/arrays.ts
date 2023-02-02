const carMakers = ['ford', 'toyota', 'chevy']; //type inference knows it is array of strings string[]

const emptyArray: string[] = []; //initialize empty array add annotation to set type

const dates = [new Date(), new Date()]; //TS infers array of dates Date[]

const carsByMake = [['f150'], ['corolla'], ['camaro']]; // type inference for 2d array string[][]

// Help with inference when extracting values
const car = carMakers[0]; //TS knows car is going to be a string
const myCar = carMakers.pop(); //Again TS knows myCar will be string

// Prevent incompatible values
// carMakers.push(100) // Error trying to add number to array of strings

// Help with builtin functions like map, foreach, reduce, filter, etc.
// TS will give us autocomplete for variable based on type.
carMakers.map((car: string): string => {
	return car.toUpperCase();
});

// Arrays can still contain multiple different types.
// Flexible types
const importantDates = [new Date(), '2030-10-10']; //TS infers type (string | Date)[]
// If we only initialize array with date then TS won't know it can hold strings as
// well unless we use type annotation
const importantDatesTyped: (string | Date)[] = [new Date(), '2030-10-10'];

