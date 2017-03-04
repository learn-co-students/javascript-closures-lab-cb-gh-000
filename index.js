function bumpCounter() {
    var counter = 0;

    function addBump() {
        counter++;
    }

    function getBumps() {
        return counter;
    }

    return {addBump, getBumps};
}

function createAnimal(animalType) {
    function installDeadlyDevice(deadlyDevice) {
        return {
            animalType: animalType,
            deadlyDevice: deadlyDevice
        }
    }

    return installDeadlyDevice;
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
