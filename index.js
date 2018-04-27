function bumpCounter() {
  let counter = 0;

  function addBump() {
    counter++
  }
  function getBumps() {
    return counter;
  }
  return {addBump, getBumps}
}

function createAnimal(animalType) {
  function attachDevice(deadlyDevice) {
    return {animalType: animalType, deadlyDevice: deadlyDevice}

  }
  return attachDevice
}

const sharkCreator = createAnimal("Shark")

const sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
const sharkWithFrickinCannon = sharkCreator("Cannon")

console.log(sharkWithFrickinLaserbeam)
console.log(sharkWithFrickinCannon)
