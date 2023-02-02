// function inside of an object with function annotation

const profile = {
	name: 'alex',
	age: 20,
	coords: {
		lat: 0,
		lng: 15,
	},
	setAge(age: number): void {
		this.age = age;
	},
};

// const {age}: number = profile // this doesn't work.
const { age }: { age: number } = profile; // correct way

const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
