function bumpCounter() {
  var counter = 0
  function addBump() {
    counter++
  }
  function getBumps() {
    return counter
  }
  return { addBump, getBumps }
}

function createAnimal(animalType) {
  return function createAnimal(deadlyDevice) {
    return { animalType, deadlyDevice }
  }
}

function sharkCreator(deadlyDevice) {
  return createAnimal('Shark')
}

var sharkWithFrickinLaserbeam = sharkCreator()('Laserbeam')
var sharkWithFrickinCannon = sharkCreator()('Cannon')
