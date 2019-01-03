const app = "I don't do much."

function bumpCounter(){
  let counter = 0;

  function addBump() {
    counter+= 1;
  }

  function getBumps() {
    return counter
  }

  return {
    addBump,
    getBumps
  };

}

function createAnimal(animalType) {

  return function generateWeapon(deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
}

const sharkCreator = function() {
  return createAnimal('Shark');
};

const sharkWithFrickinLaserbeam = sharkCreator()('Laserbeam');
const sharkWithFrickinCannon = sharkCreator()('Cannon');
