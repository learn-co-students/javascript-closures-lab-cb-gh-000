function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter++;
  };

  function getBumps() {
    return counter;
  };

  return {
    addBump,
    getBumps
  };
};

function createAnimal(animalType) {
  return function addDeadlyDevice(deadlyDevice) {
    return {
      animalType,
      deadlyDevice
    };
  };
};

const sharkCreator = createAnimal('Shark');
const sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
const sharkWithFrickinCannon = sharkCreator('Cannon');
