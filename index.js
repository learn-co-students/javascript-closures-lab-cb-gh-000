function bumpCounter() {
	var counter = 0;

	function addBump() {
		counter++;
	}

	function getBumps() {
		return counter;
	}
	return {
		addBump,
		getBumps
	}
}

function createAnimal(animalType) {
	function makeCreation(deadlyDevice) {
		return {
			animalType: animalType,
			deadlyDevice: deadlyDevice
		};
	}
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
var sharkWithFrickinCannon = sharkCreator("Cannon");
