function bumpCounter(counter) {
  var bump = 0;
  function addBump() {
    bump++;
  }

  function getBumps() {
    return bump;
  }
  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  function createDeadlyDevice(deadlyDevice) {
    return {
      animalType,
      deadlyDevice
    };
  }
  return createDeadlyDevice;
}

var sharkCreator = createAnimal("Shark");
var sharkWithFrickinLaserbeam = createAnimal("Shark")("Laserbeam");
var sharkWithFrickinCannon = createAnimal("Shark")("Cannon");
