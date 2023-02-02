// const oldCivic = {
// 	name: 'civic',
// 	year: 2000,
// 	broken: true,
// };

// The type annotations here could get really long and if we pass in oldCivic
// other places we would have to repeat the annotations every time.
// const printVehicle = (vehicle: {
// 	name: string;
// 	year: number;
// 	broken: boolean;
// }): void => {
// 	console.log(`Name: ${vehicle.name}`);
// 	console.log(`Year: ${vehicle.year} `);
// 	console.log(`Broken: ${vehicle.broken} `);
// };
// printVehicle(oldCivic);

// Better way
interface Vehicle {
	name: string;
	year: Date; // type can be any type
	broken: boolean;
	summary(): string; //can also define what kind of functions must be part of interface
}

// We can have an object that meets requirements that has extra properties.
// generic interface that can be used with very different objects
// can be used to write very reusable code.
interface Reportable {
	summary(): string; //can also define what kind of functions must be part of interface
}

// These two objects are very different but because they both have a summary
// both are type Reportable and can be called with printSummary
const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const aDrink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar`;
	},
};

const printVehicle = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year} `);
	console.log(`Broken: ${vehicle.broken} `);
	console.log(vehicle.summary());
};
printVehicle(oldCivic);

// This is fine because Reportable only requires summary even though
// oldCivic has extra things.
// Refactor code to make more generic something that can print a summary.
const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};
printSummary(oldCivic);
printSummary(aDrink);
