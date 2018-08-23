const app = "I don't do much."
function bumpCounter() {
  counter = 0;
  function addBump() {
    counter = counter + 1;
  }
  
  function getBumps() {
    return counter;
  }
  
  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  function f1(deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
  
  return f1;
}

sharkCreator = createAnimal('Shark');
sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
sharkWithFrickinCannon = sharkCreator('Cannon');