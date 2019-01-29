const app = "I don't do much."

function  bumpCounter() {
    var bumps = 0

    function addBump() {
        bumps += 1
    }

    function getBumps() {
        return bumps
    }

    return {
        addBump,
        getBumps
    }

}

function createAnimal(animalType) {
    return deadlyDevice => {
        return {animalType,  deadlyDevice}
    }
}

var sharkCreator = createAnimal("Shark")
var sharkWithFrickinCannon = sharkCreator("Cannon")
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
