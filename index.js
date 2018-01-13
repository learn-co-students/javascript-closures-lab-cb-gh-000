function bumpCounter() {
  let counter = 0

  function addBump() {
    counter = counter + 1
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  function innerFunc(deadlyDevice) {
    return { animalType, deadlyDevice }
  }

  return innerFunc
}

var sharkCreator = createAnimal('Shark')

var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')

var sharkWithFrickinCannon = sharkCreator('Cannon') 
