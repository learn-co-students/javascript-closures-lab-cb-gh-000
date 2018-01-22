const app = "I don't do much."


function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter += 1;
    return counter;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps,
  }
}

function createAnimal(animalType) {
  function animalWithWeaponFunc(deadlyDevice) {
    return {
      animalType,
      deadlyDevice,
    }
  }

  return animalWithWeaponFunc;
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
