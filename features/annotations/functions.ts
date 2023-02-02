//  TS type inference on functions will only try to figure out type of return value

// without types for params TS infers any
// if I say it returns a number TS will error if there is no return and/or
// what it returns isn't a number
// If I didn't annotate return type, TS would be able to infer it.
const add = (a: number, b: number): number => {
	return a + b;
};

// TS could infer return type except we didn't return anything so it doesn't
// warn us. This is why we should always use type annotation for return type
// and not rely on type inference.

// examples of different ways to write functions with type annotation
const subtract = (a: number, b: number) => {
	a - b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

// function with return void doesn't return anything (could return null or undefined)
const logger = (message: string): void => {
	console.log(message);
};

// never is used when function will not finish and never return anything
const throwError = (message: string): never => {
	throw new Error(message);
};

// Destructuring with annotations
const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};

// destructuring portion and annotation are separate
const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};

logWeather(todaysWeather);
