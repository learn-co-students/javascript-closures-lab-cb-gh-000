function createAnimal(animalType) {
  return function createDeadlyDevice(deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
}

var sharkCreator = createAnimal('Shark');

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');

function bumpCounter(_bumps=[]) {

  return {
    addBump: (bump) => {_bumps.push(bump);return _bumps.length},
    getBumps: () => _bumps.length
  }
}
