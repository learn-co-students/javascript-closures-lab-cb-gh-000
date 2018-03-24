function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  function addDeadlyDevice(deadlyDevice) {
    return {
      animalType,
      deadlyDevice
    }
  }

  return addDeadlyDevice;
}

let sharkCreator = createAnimal('Shark');

let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
let sharkWithFrickinCannon = sharkCreator('Cannon');
